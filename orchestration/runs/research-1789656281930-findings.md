# Research findings

I assessed 4 retrieved sources against the goal of finding task success/hallucination rates on standard benchmarks under fixed token budgets.

1. **arXiv:2609.19128v1** [https://arxiv.org/abs/2609.19128v1]: Abstract screened. Reports ScienceWorld success rates (43.17%). Compares 'adaptive memory' against a 'no-memory' baseline, not a standard 'static/append-only' memory policy. Token budget is implied by context limits but not explicitly fixed as a variable constraint for comparison.
2. **GitHub: affaan-m/ECC** [https://raw.githubusercontent.com/affaan-m/ECC/main/README.md]: Practitioner guide. Describes memory hooks for code agents. No benchmark metrics, no ScienceWorld/BigBench data, no token budget analysis.
3. **Anthropic: managed-agents** [https://www.anthropic.com/engineering/managed-agents]: Official guidance. Discusses session logs as append-only. No empirical performance data on specific benchmarks.
4. **OpenAI Cookbook: Context_summarization** [https://raw.githubusercontent.com/openai/openai-cookbook/main/examples/Context_summarization_with_realtime_api.ipynb]: Practitioner guide. Describes strategy for summarizing context when windows fill. No benchmark results or hallucination rates.

**Evaluation Limitations**: Only 1 source offers relevant benchmark data, but it tests a specific 'dual-process' architecture against a 'no-memory' baseline, not a standard static memory policy. The other 3 sources are descriptive/practical guides without empirical validation on standard benchmarks. Direct A/B testing of memory policies under fixed budgets is absent in this set.

**Decision**: Halt the current comparative loop. The evidence is insufficient to support claims of 'best practical agent-memory management' or superiority of dynamic policies over static ones without controlled A/B testing. The authorized research program continues, but the specific hypothesis is deferred due to lack of causal evidence.

This is a research worker's output. Consult the reviews and manager disposition alongside it.
