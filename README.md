# The Funniest Out-of-Office

[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/h05meigames/makefun-out-of-office-line/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/h05meigames/makefun-out-of-office-line/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)

Entry for the [make.fun bounty "The Funniest Out-of-Office"](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf) — one line, at most 140 characters, the funniest out-of-office message. It reads like a real auto-reply a person could actually set: away until Tuesday, and the joke turns on itself — the out-of-office reply is out of the office too, so all you get is an automated shrug.

Try make.fun with my referral: https://make.fun/r/0ene8b3q

## The line

> I'm away until Tuesday. My out-of-office reply is out of the office too, so please accept this automated shrug instead.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt` — a single line of UTF-8 text, no trailing newline, within the 140-character limit — and prints exactly that one line to stdout. A code-point length guard (1–140 characters, counted with `[...line].length`) refuses to write an out-of-range line, and a newline check keeps it to exactly one line.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
