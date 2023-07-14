import { parse } from "csv-parse/sync";
import fs from "fs";

export function readCsvFile(filePath: string) {
  const fileData = fs.readFileSync(filePath, "utf-8");
  let content: Array<any> = [];
  parse(fileData, {
    columns: true,
    skip_empty_lines: true,
    autoParse: true,
    bom: true,
    on_record: (record) => {
      content.push(splitProperties(record));
    },
  });

  return content;
}

function splitProperties(obj) {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (typeof value === "string" && value.includes(";")) {
        result[key] = value.split(";");
      } else {
        result[key] = value;
      }
    }
  }

  return result;
}
