# Research objective and evidence standards

## Question

What lets an agent retain useful information, find it when needed, update it when wrong, and resume work without accumulating misleading context?

“Better than skills and Markdown” is a hypothesis to test. Markdown is a representation and skills are reusable procedures; neither is a complete memory policy. Compare systems at the level of information capture, storage, indexing, retrieval, maintenance, and use.

## Coverage to build over time

- Working context, episodic history, semantic knowledge, procedural memory, and prospective tasks.
- Files and summaries; retrieval over logs; structured facts; graph and temporal memory; hierarchical or learned policies.
- Compression, consolidation, contradiction handling, provenance, deletion, and forgetting.
- Official provider guidance, primary research, benchmark datasets and code, maintained implementations, and clearly labeled practitioner reports.
- Failure cases: stale facts, false recall, evidence loss, retrieval misses, context poisoning, cross-task leakage, and memory growing faster than it helps.
- Cost and latency, quality at equal budgets, reproducibility, and simple baselines.

This is a continuing review, not a promise to compile literally every publication. Each task must be small enough to inspect and review.

## Minimum source record

Store a stable identifier, title, authors or organization, publication date when known, canonical URL, source type, access date, inspection depth, relevant claims, limitations, and discovering instance/run. Link code and benchmark versions when relevant. Do not invent missing metadata.

Inspection depth matters: **discovered**, **abstract screened**, **source inspected**, and **result reproduced** are different states. Reading a paper does not reproduce its results. A repository README does not prove the implementation works.

Primary sources support technical claims. Practitioner posts can surface hypotheses or operational experiences, labeled accordingly. Prefer canonical documents and preserve contradictory or negative evidence. Reading a source is authorized research; installing or executing its code is a separate future phase.

## Minimum research note

A note states its question, search scope, sources actually inspected, supported findings, unresolved disagreements, limitations, and the next test that would distinguish competing explanations. Separate the source author's claim from our inference.

Use the existing [commissioning review](../agent-memory/README.md) as a map, not an answer key. Recheck any seed cited as current evidence and record that provenance in `refs/`.
