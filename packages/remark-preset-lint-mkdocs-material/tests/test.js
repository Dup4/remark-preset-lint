"use strict";

import test from "ava";
import { remark } from "remark";
import remarkPresetLintMarkdownStyleGuide from "../index.js";

import fs from "fs";

for (let i = 1; i <= 1; i++) {
  const in_md = fs.readFileSync(`tests/data/${i}.in.md`);
  const out_md = fs.readFileSync(`tests/data/${i}.out.md`);

  test(`TestCase ${i}`, (t) => {
    remark()
      .use(remarkPresetLintMarkdownStyleGuide)
      .process(in_md, function (err, res) {
        t.is(String(res), String(out_md));

        if (String(res) !== String(out_md)) {
          console.log(String(res));
        }
      });
  });
}
