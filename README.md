# Sum up 25 November's world news in one image

Entry for `news-image-20261125` on make.fun.

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. The image is 1024x1024, 121 KiB, PNG.

## The day: Wednesday 25 November 2026

1. **Ukraine** — Zelenskiy confirms Ukraine hit a Russian cargo ship in the
   Gulf of Finland. Russia calls it terrorism. A second vessel was hit off
   Libya.
2. **Climate** — COP31 in Antalya ends with no deal after oil and gas
   producers block fossil-fuel phaseout language.
3. **Tech** — A US jury convicts Huawei on 10 of 12 counts, including
   trade-secret theft and bank fraud. Huawei rejects the verdict.
4. **Middle East** — A Houthi drone attack on Riyadh's tallest tower wounds
   11. Houthi forces push to within 60 km of Aden.
5. **Gaza** — The reported death toll reaches 74,746. An Israeli strike kills
   a Hamas official in Gaza.
6. **United States** — Trump awards Rudy Giuliani the Medal of Freedom. The
   CIA and the ODNI are hit by a cyber breach of unclassified information.
7. **Also today** — China opens a corruption probe into Shanghai Party chief
   Chen Jining. Iran: singer Parastoo Ahmadi gets 74 lashes after a YouTube
   concert. DR Congo: Ebola outbreak grows; WHO evacuates staff from Akwe
   hospital.

Sources checked 25 November 2026: Reuters world news summary, Daily Debrief,
BD Global Times, stockbiz, newsreel.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic: the program copies the same file every run, no network.
