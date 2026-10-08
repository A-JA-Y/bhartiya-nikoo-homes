import { Fragment } from "react";
import Md, { plainText } from "./Md";

export type TableVariant = "cards" | "scroll";

export type DataTableOptions = {
  // "cards": each row becomes a labelled card on phones (default).
  // "scroll": wide numeric tables scroll sideways with the first column pinned.
  variant?: TableVariant;
  // First column names a group; an empty first cell continues the group above.
  groupFirstColumn?: boolean;
  // Style the last row as a total.
  totalLastRow?: boolean;
  // Column whose cell titles each card on phones (default: the first).
  mobileTitleColumn?: number;
  caption?: string;
};

// Phone card classes: the title cell heads the card, empty cells are hidden,
// and long values sit under their label instead of beside it.
function cellClass(cell: string, isTitle: boolean) {
  if (isTitle) return "is-title";
  if (!cell) return "is-empty";
  return plainText(cell).length > 38 ? "is-long" : undefined;
}

// A table from the copy. With no header row it is a two-column fact table.
export default function DataTable({
  head,
  rows,
  variant = "cards",
  groupFirstColumn = false,
  totalLastRow = false,
  mobileTitleColumn = 0,
  caption,
}: { head: string[] | null; rows: string[][] } & DataTableOptions) {
  if (!head) {
    return (
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm" data-animate="fade-up">
        <table className="kv-table">
          {caption && <caption className="sr-only">{caption}</caption>}
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                <th scope="row">
                  <Md text={row[0]} />
                </th>
                <td>
                  <Md text={row[1] ?? ""} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const labels = head.map((h) => plainText(h));

  if (groupFirstColumn) {
    // Split into groups: a row with a first cell starts a new group.
    const groups: { name: string; rows: string[][] }[] = [];
    rows.forEach((row) => {
      if (row[0] || groups.length === 0) groups.push({ name: row[0], rows: [] });
      groups[groups.length - 1].rows.push(row.slice(1));
    });

    return (
      <div className="md:overflow-hidden md:rounded-2xl md:border md:border-line md:bg-white md:shadow-sm" data-animate="fade-up">
        <table className="rtable rtable--cards">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr>
              {labels.map((label, i) => (
                <th key={i} scope="col">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <Fragment key={group.name}>
                <tr className="group-row md:hidden">
                  <th colSpan={labels.length}>{group.name}</th>
                </tr>
                {group.rows.map((row, r) => (
                  <tr key={row[0]}>
                    {r === 0 && (
                      <th scope="rowgroup" rowSpan={group.rows.length} className="group-cell">
                        {group.name}
                      </th>
                    )}
                    {row.map((cell, c) => (
                      <td key={c} data-label={labels[c + 1]} className={cellClass(cell, c === 0)}>
                        <Md text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const table = (
    <table className={`rtable ${variant === "scroll" ? "rtable--scroll" : "rtable--cards"}`}>
      {caption && <caption className="sr-only">{caption}</caption>}
      <thead>
        <tr>
          {labels.map((label, i) => (
            <th key={i} scope="col">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, r) => (
          <tr key={`${row[0]}-${r}`} className={totalLastRow && r === rows.length - 1 ? "is-total" : undefined}>
            {row.map((cell, c) => (
              <td key={c} data-label={labels[c]} className={cellClass(cell, c === mobileTitleColumn)}>
                <Md text={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  if (variant === "scroll") {
    return (
      <div data-animate="fade-up">
        <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-sm">{table}</div>
        <p className="mt-2 text-[11px] text-gray-400 md:hidden" aria-hidden="true">
          Swipe the table sideways to see every column →
        </p>
      </div>
    );
  }

  return (
    <div className="md:overflow-hidden md:rounded-2xl md:border md:border-line md:bg-white md:shadow-sm" data-animate="fade-up">
      {table}
    </div>
  );
}
