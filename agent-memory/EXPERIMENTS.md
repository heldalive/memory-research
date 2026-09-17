# Experimental protocol v1

## Primary question

At a fixed reader model and resource budget, does a versioned, provenance-linked memory improve **held-out task success** over a recency window and searchable notes? Storage format is an ablation, not the primary hypothesis.

## Baselines and controls

1. No memory (negative control), full context (costly reference), last-k events.
2. Plain notes with lexical retrieval; same records in Markdown and JSON to isolate serialization.
3. Versioned key/value ledger with explicit corrections and tombstones.
4. Rolling summary, summary plus immutable evidence, vector retrieval.
5. Graph retrieval and learned write policy only after simpler baselines are working.

Fix model ID/revision when available, prompts, decoding, evidence order, retrieval count, and total context allowance. Count write, read, reflection, retrieval, retry and judge costs. A method may spend less on reads by spending much more on writes. Record model/provider changes; do not silently pool them.

## Test families

- Factual recall under distractors and paraphrased questions.
- Corrections: latest-valid fact; separate historical-time questions.
- Unknown answers and abstention; distinguish missing facts from forgotten ones.
- Delayed intentions triggered by an external event.
- Procedural transfer to unseen tasks, not repeating the training question.
- Interruption/restart; concurrent writers and conflicting evidence.
- Deletion: inspect raw data, index, summary, cache and derived state separately.
- Adversarial quoted instructions in memory: they are data, never authority.

Use synthetic records with explicit ground truth for the first tests. Keep development seeds 1–100 and held-out seeds 1001–1200 disjoint. This is a planned sample-size starting point, not a power calculation. Preregister a minimum meaningful effect and use pilot variance to choose the eventual number of independent episodes.

## Metrics and uncertainty

Primary: per-episode task success. Secondary: evidence recall@k, answer exact match/F1 as appropriate, stale-answer rate, abstention precision/recall, prompt-injection compliance, latency p50/p95, total tokens/calls, bytes stored and bytes read. Record failures and timeouts in denominators.

Compare methods on the same episodes. Bootstrap **episodes**, not correlated questions inside an episode; report paired 95% intervals and sample counts. Do not repeatedly tune on the test set. Use a separate judge model only where deterministic grading is impossible, with a blinded human audit subset and disclosed disagreements. Small demonstrations establish plumbing, not superiority.

## What runs now

`node agent-memory/experiments/baseline.mjs` exercises deterministic storage semantics across 200 seeded synthetic episodes. It uses no LLM, embeddings or paid calls. Results are written to JSON and clearly marked mechanical baselines. This checks whether correction/deletion semantics are implemented, not whether an agent can extract them from language.

The website's browser trial is a separate 12-fact compression/3-question recall task using Qwen3 4B with a 240-character memory allowance. Conditions rotate notes/ledger/story/a model-proposed instruction. Structured recall restricts the answer vocabulary. The seed, record, questions, output, truncation, model and computation source are preserved. No paper-level benchmark claims follow from this trial. Central proposals do not become a new best method merely because they sound persuasive.

## Planned external reproductions

Start with LongMemEval's official data and scoring, then MemoryArena for action-dependent memory and PM-Bench for intentions. Check licenses and pinned revisions first. We have **not** run these full suites yet. The living researcher will record the exact methods it inspects and the remaining reproduction work.
