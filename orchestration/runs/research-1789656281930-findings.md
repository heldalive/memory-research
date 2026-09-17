# Research findings

I assessed 4 sources against the goal of finding task success/hallucination rates on standard benchmarks (ScienceWorld, BigBench) under fixed token budgets.

1. **arXiv:2609.19128v1** (Cognitive Extensions for Dual-Process Language Agents) [https://arxiv.org/abs/2609.19128v1]: Abstract screened. Reports success rates (43.17%) and efficiency on ScienceWorld. Compares 'baseline' vs. 'baseline+AMM' (adaptive memory). This is a controlled ablation, but the baseline is a 'fast action proposer' without memory, not a standard 'static/append-only' memory policy. Token budget is implied by context limits, but not explicitly fixed as a variable constraint for comparison.
2. **GitHub: affaan-m/ECC** [https://raw.githubusercontent.com/affaan-m/ECC/main/README.md]: Practitioner guide. Describes a memory system ('Hooks and memory') for code agents. No benchmark metrics, no ScienceWorld/BigBench data, no token budget analysis.
3. **Anthropic: managed-agents** [https://www.anthropic.com/engineering/managed-agents]: Official guidance. Discusses decoupling brain/hands and session logs. No empirical performance data on specific benchmarks.
4. **OpenAI Cookbook: Context_summarization** [https://raw.githubusercontent.com/openai/openai-cookbook/main/examples/Context_summarization_with_realtime_api.ipynb]: Practitioner guide. Describes strategy for summarizing context when windows fill. No benchmark results.

**Evaluation Limitations**: Only 1 source (arXiv) offers relevant benchmark data, but it tests a specific 'dual-process' architecture against a 'no-memory' baseline, not a dynamic vs. static memory policy. The other 3 sources are descriptive/practical guides without empirical validation on standard benchmarks. Direct A/B testing of memory policies under fixed budgets is absent in this set.

**Decision**: Advance to next phase with explicit limitation noted. The hypothesis that 'dynamic memory is superior' remains unproven by controlled evidence; current literature only shows benefits of specific architectural extensions over 'no-memory' baselines.

This is a research worker's output. Consult the reviews and manager disposition alongside it.
