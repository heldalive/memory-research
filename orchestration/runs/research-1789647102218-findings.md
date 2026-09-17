# Research findings

I assessed 4 retrieved sources against the revised objective: identify 4 sources describing agent memory management (dynamic vs. static) with reported benchmark performance.

1. **arXiv:2609.19128v1** (Cognitive Extensions for Dual-Process Language Agents): Describes an Adaptive Memory Module (AMM) for salience-gated storage. Tested on ScienceWorld. Claims full system outperforms baseline, but does not isolate dynamic memory against a static append-only baseline under identical token budgets. Abstract screening only.
2. **GitHub:affaan-m/ECC**: A skills-first agent framework. Describes memory as 'session summaries' and 'continuous learning'. No empirical benchmark data comparing memory policies against baselines. Practitioner writing.
3. **Anthropic:managed-agents**: Official guidance on decoupling agent components. Describes a 'session' as an append-only log of events. Discusses context resets to manage limits. No comparative performance data on task success/hallucination rates. Official provider guidance.
4. **OpenAI Cookbook:Context_summarization_with_realtime_api**: Example notebook on auto-summarizing long conversations to fit token windows. Describes a strategy for dynamic compression. No controlled comparison against a static baseline (e.g., never summarizing) under fixed budget. Practitioner writing.

**Evaluation Limitations**: No source provides the necessary experimental control (fixed token budget, direct baseline comparison) to empirically measure superiority. Findings are descriptive or rely on unverified claims. Abstract screening limits depth of methodological understanding.

**Unresolved Questions**: Do dynamic consolidation policies improve task success when token budgets are strictly constrained? What specific metrics (hallucination rate, retrieval accuracy) degrade when static baselines hit limits?

This is a research worker's output. Consult the reviews and manager disposition alongside it.
