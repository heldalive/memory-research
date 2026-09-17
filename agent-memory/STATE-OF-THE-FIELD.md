# State of the field — 16 September 2026

## The useful conclusion

There is no substantiated universal best agent memory. A good starting design is an immutable evidence log, compact working context, selective retrieval, explicit correction/deletion, and evaluated consolidation. A file, vector database, graph, skill library, or learned memory can implement parts of that design. **The choice of what to retain and retrieve matters more than the extension of the file.** This is our synthesis and a hypothesis to test, not a theorem or a leaderboard result.

The broad [Memory in the Age of AI Agents survey](https://arxiv.org/abs/2512.13564) distinguishes memory forms, functions and dynamics. That distinction prevents several common confusions: storing chat is not the same as using it correctly; a larger context window is not perfect recall; a skill encodes a procedure rather than a complete record of experience; changing external memory is not changing model weights.

## A map of the methods

| Family | What is retained | Useful when | Main failure or cost | Representative sources |
|---|---|---|---|---|
| Full history / rolling window | Raw turns and tool output | Short tasks; essential baseline | Cost grows; older evidence falls out; position sensitivity | [Lost in the Middle](https://arxiv.org/abs/2307.03172), [RULER](https://arxiv.org/abs/2404.06654) |
| Compaction / summaries | A compressed account | Resuming long tasks | Irreversible loss or invented details if evidence is discarded | [Anthropic context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), [OpenAI compaction](https://developers.openai.com/api/docs/guides/compaction) |
| External notes and ledgers | Explicit facts, plans, decisions | Inspectable continuity; changing facts | Staleness, duplication, ambiguous provenance | [Long-running harnesses](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), [MemGPT](https://arxiv.org/abs/2310.08560) |
| Vector / lexical retrieval | Episodes or extracted facts | Relevant evidence among many records | Retrieval misses; misleading semantic matches; indexing cost | [Mem0](https://arxiv.org/abs/2504.19413), [MemMachine](https://arxiv.org/abs/2604.04853) |
| Graph / temporal memory | Entities, relations, validity intervals | Multi-hop questions and changing relationships | Extraction/entity resolution mistakes; expensive writes | [Zep](https://arxiv.org/abs/2501.13956), [HippoRAG 2](https://arxiv.org/abs/2502.14802) |
| Self-organizing notes | Linked notes and revisable organization | Growing heterogeneous experience | Unstable reorganizations and maintenance overhead | [A-MEM](https://arxiv.org/abs/2502.12110), [All-Mem](https://arxiv.org/abs/2603.19595) |
| Reflection and reusable procedures | Lessons, playbooks, executable skills | Repeated tasks with feedback | Wrong lessons become durable; task-specific overfitting | [Reflexion](https://arxiv.org/abs/2303.11366), [Voyager](https://arxiv.org/abs/2305.16291), [ACE](https://arxiv.org/abs/2510.04618) |
| Consolidation / sleep-time work | Organized evidence and derived beliefs | Moving costs off the critical path | Background work still costs compute; beliefs can drift | [LightMem](https://arxiv.org/abs/2510.18866), [Hindsight](https://arxiv.org/abs/2512.12818) |
| Learned / latent / parametric memory | Neural state or adapted parameters | Research on test-time learning | Requires architectural/training access; difficult provenance and deletion | [Titans](https://arxiv.org/abs/2501.00663) |

Several methods combine these families. A graph is not automatically better than a list, and a Markdown wiki is not automatically inferior to a product. Compare complete systems at matched budgets, then ablate the component whose value is being claimed.

## Provider practice

Anthropic describes using concise context, on-demand retrieval, compaction, structured notes and delegated contexts. Its long-running harness article emphasizes explicit progress artifacts and verifying work after a context transition. [Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) packages reusable procedures with progressive disclosure. These are practical designs, not demonstrations that one storage format solves memory. [Memory tool documentation](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool) exposes an interface; the application still owns persistent storage and access boundaries.

OpenAI's [conversation state](https://developers.openai.com/api/docs/guides/conversation-state), [session-memory cookbook](https://developers.openai.com/cookbook/examples/agents_sdk/session_memory), and [Agents SDK sessions](https://openai.github.io/openai-agents-python/sessions/) describe mechanisms for continuity, trimming, summarization and persistence. The compaction API produces continuation state that is not the same thing as a human-readable fact ledger. None of these interfaces, by itself, demonstrates correct retrieval, forgetting, or long-horizon task performance.

## What the benchmarks actually measure

[LoCoMo](https://arxiv.org/abs/2402.17753) evaluates long conversational history. [LongMemEval](https://arxiv.org/abs/2410.10813) includes updating, temporal reasoning and abstention. [MemoryAgentBench](https://arxiv.org/abs/2507.05257) uses incremental interactions to probe more than static retrieval. [MemoryArena](https://arxiv.org/abs/2602.16313) connects information learned in earlier subtasks to later actions. [GroupMemBench](https://arxiv.org/abs/2605.14498) addresses multi-party attribution, while [PM-Bench](https://arxiv.org/abs/2607.12385) concerns remembering to act at the right future cue.

A system can answer questions about yesterday and still fail to carry out tomorrow's intention. It can retrieve the correct passage yet generate a wrong answer. Report retrieval recall, answer quality and task success separately. Report write-time and background processing too: [systems characterization work](https://arxiv.org/abs/2606.06448) makes this cost distribution explicit.

## Recent directions worth testing

Preserving raw evidence while changing indexes or summaries helps make errors reversible. Typed records separating observations from beliefs can make provenance clearer. Temporal validity can keep a corrected fact from competing with its superseded version. Learned policies may choose memory operations better than fixed rules, but require careful separation of training and evaluation: the recent [Hindsight Memory-PRM preprint](https://arxiv.org/abs/2608.29605) is a candidate to reproduce, not an independently verified best method. Similarly, [FluctlightDB](https://arxiv.org/abs/2608.12365) presents an emerging data-model proposal and author-run results. We do not turn recent abstracts into a definitive ranking.

## What we can learn from builders

The [source catalog](SOURCES.md) includes Letta, Mem0, Graphiti, A-MEM, Hindsight, LangMem, LangGraph, MemOS, Supermemory, Hermes and OpenClaw. These repositories reveal implementation choices and operational requirements. Their stars and README performance claims are not controlled evidence. Pin revisions and licenses before reproducing them; do not install all their code into the running exhibit.

[Simon Willison's framing](https://simonwillison.net/2025/Jun/27/context-engineering/) and [Drew Breunig's context-management patterns](https://www.dbreunig.com/2025/06/26/how-to-fix-your-context.html) help formulate practical hypotheses. [Chroma's context-rot experiments](https://research.trychroma.com/context-rot) motivate testing long-context reliability under distractors. These sources have distinct evidence levels: practitioner observations and vendor experiments should remain labeled as such.

## The experiment we should do

Start with append-only events and three equally constrained readers: recency window, searchable notes, and a versioned fact ledger. Then add summaries, semantic retrieval, graphs and learned write policies one at a time. Cross the methods with recall, corrections, abstention, delayed intentions, procedural transfer, irrelevant records and interruptions. Keep model, token budget and task distribution fixed. Preserve raw traces. An attractive memory is one that improves held-out task success per total cost while meeting provenance and deletion requirements; a neat-looking note is not enough.

The current browser demonstration compresses twelve randomized name/object facts into 240 characters, then asks a fresh context three questions. It is intentionally narrow: constrained-vocabulary, synthetic, and not equivalent to any published benchmark. Results from browser clients are untrusted telemetry; independently rerun them before making scientific claims. The central research program must expand beyond this toy test.

## Open questions

How much raw evidence should remain after consolidation? When should conflicting records coexist rather than overwrite? Can learned write policies transfer across reader models? What does forgetting mean when backups and derived summaries exist? How should separate agents reconcile incompatible memories? How should a system remember an intention without repeatedly prompting itself about it? Which gains survive equal-budget reproduction on unseen tasks? These questions define a useful research program; this review does not claim to settle them.
