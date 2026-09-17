# Research findings

## Query log (2026-09-16; web search; result counts not shown)

1. `agent memory benchmark persistent memory full history baseline token budget` — **eligible source found** (LongMemEval; also practitioner GitHub leads).
2. `LLM agent memory retrieval update contradiction forgetting empirical evaluation` — **eligible source found** (MemoryAgentBench).
3. `episodic semantic procedural memory autonomous agent benchmark comparison` — **lead only** (benchmark/project leads; no additional inspected source before four-source cap).
4. `agent memory Markdown transcript baseline context budget study` — **eligible source found** (ServiceNow budget-constrained study).
5. `site:arxiv.org agent memory benchmark retrieval forgetting contradiction` — **eligible source found** (Memora; screened after the four-source cap, not added as a fifth).
6. `site:github.com agent memory benchmark persistent memory evaluation` — **lead only** (repositories; not counted because four eligible sources had already been reached).

Result: four eligible sources reached; stopping rule satisfied. Search snippets were not treated as evidence.

## Source records

### S1 — LongMemEval (source inspected)
Canonical URL: https://arxiv.org/html/2410.10813v2
Exact locations inspected: Abstract; §§3.1–3.4; §4.2 (design choices); §§5.1–5.5; Table 1.

- **Storage / write-update:** Online context-compression formulation. Sessions are processed sequentially and indexed; authors test session, round, and fact decomposition. Explicit deletion/forgetting algorithm is **not reported**; knowledge-update questions are in the benchmark.
- **Retrieval:** Three-stage framework (indexing, retrieval, reading); multi-key/fact-augmented indexing and time-aware query expansion. Reading uses retrieved items, with chain-of-note and structured formats.
- **Forgetting / contradiction:** Temporal and knowledge-update abilities are evaluated, but a general contradiction-resolution policy is **not reported**.
- **Baseline and budget:** Flat index using memory values as keys is described as a “strong baseline” (§5.3). Long-context systems are compared at LongMemEval-S (~115k tokens/problem) and M (~1.5M); token-cost parity between memory variants is **unclear**.
- **Author-reported evidence:** Key expansion improved recall@k by 9.4% and QA by 5.4%; time-aware expansion improved temporal recall 6.8–11.3%; reading optimizations improved QA up to 10 points (§§5.3–5.5). Authors report 30–60% drops for long-context LLMs on S.
- **Inference:** Improvements are demonstrated against the paper’s flat-index baseline, not against a Markdown-file or token-matched full-history system; superiority to simple operational baselines remains unresolved.
- **Limitations:** Synthetic/task-oriented histories, benchmark-specific optimizations, and no equal-total-inference-budget accounting are stated or implied by the setup.

### S2 — MemoryAgentBench (source inspected)
Canonical URL: https://arxiv.org/html/2507.05257
Exact locations inspected: Abstract; §§1, 2.1, 4, 4.1–4.3, 5; Appendix B (competency definitions); Appendix C (agent descriptions); Appendix E (ablations); conclusion.

- **Storage / write-update:** Covers textual histories, vectors, and external databases; evaluates context-only, RAG, and agentic-memory systems. Per-system write/consolidation policies are described in Appendix C, but a universal policy is **not reported**.
- **Retrieval:** Accurate retrieval, test-time learning, long-range understanding, and selective forgetting are the four competencies (§1; Appendix B). Systems include context baselines, RAG, and tool-integrated external memory.
- **Forgetting / contradiction:** Selective forgetting explicitly tests revising/overwriting/removing information after contradictory evidence (§1; FactConsolidation dataset).
- **Baseline and budget:** Includes simple context-based and RAG systems (§§1, 4.1). Exact token, latency, and model-budget parity across all agents is **unclear**; conclusion notes experiments were limited by budget constraints.
- **Author-reported evidence:** Authors state current methods fail to master all four competencies and show substantial limitations in dynamic updates and long-range consistency (§5/conclusion).
- **Inference:** Broad coverage makes this useful for failure discovery, but it does not establish that any external-memory architecture beats full-history or simple retrieval at equal cost.
- **Limitations:** Authors explicitly report limited agent coverage due to budget constraints; benchmark datasets are reconstructed/synthetic in part.

### S3 — Memora: From Recall to Forgetting (source inspected)
Canonical URL: https://arxiv.org/html/2604.20006
Exact locations inspected: §§1–3.6; Table 2; §§4.1–4.2; Table 3; §5.

- **Storage / write-update:** Persistent memory state is updated after every simulated session; operations include add, update, and delete (Table 2; §3.2). Ground-truth traces record pre/post states.
- **Retrieval:** Agent setting incrementally ingests conversations, retrieves relevant memories at query time, and conditions generation on them (§4.1). Backend types include vector stores, APIs, profile memories, and stateful agents.
- **Forgetting / contradiction:** Invalidated/deleted facts must be absent; FAMA combines memory-presence and forgetting-absence criteria (§§3.5, 4.2). Explicit conflict-resolution implementation beyond benchmark operations is **not reported**.
- **Baseline and budget:** Compares direct-history LLMs with memory agents, all agents using GPT-4o-mini generation (§4.1). Equal context/token and latency budgets are **unclear**; direct-history models use different model configurations.
- **Author-reported evidence:** FAMA scores decline from weekly to quarterly horizons; authors report substantial obsolete-memory reliance and difficult reasoning (§5; Table 3).
- **Inference:** This benchmark directly measures stale-memory harm, making it suitable for comparing Markdown/transcript stores in a future controlled test; current results do not show one policy universally wins.
- **Limitations:** Simulated personas and LLM-generated conversations, LLM judges (three-judge majority), and only 5% human verification sampling (§3.3; §4.2).

### S4 — ServiceNow, “Are Online Skill and Memory Modules Always Worth Their Tokens?” (abstract/source inspected)
Canonical URL: https://www.servicenow.com/research/publication/sina-hajimiri-are-emnlp2026.html
Exact location inspected: Abstract (page lines 6–18).

- **Storage / write-update / retrieval / forgetting:** AWM, ASI, and ReasoningBank are compared, but operational storage, update, retrieval, and forgetting details are **not reported on this page**.
- **Baseline and budget:** Vanilla actor receives the same total token budget, spent on additional actor steps (token-matched baseline).
- **Author-reported evidence:** Across three WebArena domains and WorkArena-L1, vanilla matches or surpasses all three augmentations in aggregate success and often uses fewer tokens; run-to-run variance materially affects outcomes.
- **Inference:** This is the strongest direct warning against assuming skills/workflow memory beats a simple baseline when overhead is paid every task.
- **Limitations:** Only web/enterprise tasks, three models, and abstract-level inspection; no component-level memory ablations or Markdown comparison are available on the page.

## Synthesis
Author evidence supports a conditional conclusion: retrieval/indexing enhancements can beat a paper-defined flat-index baseline (LongMemEval), while a token-matched actor can match or exceed online skill/memory modules (ServiceNow). MemoryAgentBench and Memora show that update, temporal validity, and selective forgetting remain weak and require dedicated tests. Our inference is that no architecture is established as generally superior to Markdown, transcript retrieval, or full-history context under equal total tokens; budget comparability is usually unclear. Next decisive test: fixed-model, fixed-total-token experiments comparing append-only Markdown, transcript top-k retrieval, structured memory with updates/deletions, and full-history context on recall, stale-answer rate, contradiction handling, latency, and cost.

This is a research worker's output. Consult the reviews and manager disposition alongside it.
