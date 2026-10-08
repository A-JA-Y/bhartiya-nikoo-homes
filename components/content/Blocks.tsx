import type { Block } from "@/content/pages/types";
import DataTable, { type DataTableOptions } from "./DataTable";
import Md from "./Md";

// Renders a section's copy: paragraphs, lists, sub-headings and tables.
// FAQ, card and call-to-action blocks are laid out by the page itself.
export default function Blocks({
  blocks,
  table,
  className = "",
}: {
  blocks: Block[];
  table?: DataTableOptions;
  className?: string;
}) {
  return (
    <div className={`prose-nh ${className}`}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i}>
                <Md text={block.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="check-list">
                {block.items.map((item) => (
                  <li key={item}>
                    <Md text={item} />
                  </li>
                ))}
              </ul>
            );
          case "h3":
          case "label":
            return <h3 key={i}>{block.text}</h3>;
          case "table":
            return (
              <div key={i} className="not-prose">
                <DataTable head={block.head} rows={block.rows} {...table} />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
