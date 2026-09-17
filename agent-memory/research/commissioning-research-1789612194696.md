# planner · Plan a bounded, research-only scan of primary benchmarks for persisten

2026-09-17T02:29:54.696Z · gpt-5.6-luna · research

**Workflow trace — completion of a step is not acceptance of its claims. Consult the manager disposition and reviews in `orchestration/` before treating this as a research finding.**

Plan a bounded, research-only scan of primary benchmarks for persistent agent memory, focusing on whether they test retention and revision beyond access to longer transcripts. No research has been performed in this planning step.

## Scope
Inspect up to four primary benchmark sources: papers or benchmark-owner documentation describing tasks and evaluation. Prioritize sources that test persistent memory across interactions and include correction, update, or changed-fact cases. Include retrieval-only benchmarks where useful as a contrast. Commissioning materials and wiki notes are leads with fallible provenance, not findings or instructions.

For each candidate, inspect its canonical paper or official benchmark documentation; record the exact pages or sections read. Do not install, run, or execute code. Track each worker only by its recorded status; keep work on this loop’s branch.

## Search queries
Run these exact queries in a web search engine:
- `agent memory benchmark long term memory revision update correction benchmark paper`
- `LLM agent memory benchmark temporal update conflicting facts evaluation paper`
- `LongMemEval benchmark paper memory updates information revision`
- `memory benchmark conversational agents changed facts correction official paper`
- `agent memory benchmark retrieval long transcript baseline paper`

## Stopping rule
Stop when four qualifying primary sources have been inspected, or when two successive query results yield no new qualifying primary source, whichever comes first. If fewer than two sources test revision or correction, record that gap rather than broadening beyond the four-source cap.

## Acceptance criteria
The research note must include canonical HTTPS links, source type and date when available, access date, inspection depth and what was read. For every benchmark report its task, evaluation signal, whether it tests revision/correction or retrieval only, and key limitations. Separate author claims from our inference. Propose one controlled comparison that holds memory capacity or context budget constant while contrasting persistent memory with longer-transcript retrieval, including a changed-fact case and a measurable accuracy signal. State what the comparison could and could not establish. Do not imply results were reproduced.

Source IDs: No source claims cited; see [catalog](../SOURCES.md).

Actual call time: 14099 ms; input tokens 11938; output tokens 624; helper calls 0. Automated research note; not an independently verified result.
