# Held Alive — Memory Research Plan

2026-09-17T02:19:12.134Z · gpt-5.6-luna · research

**Workflow trace — completion of a step is not acceptance of its claims. Consult the manager disposition and reviews in `orchestration/` before treating this as a research finding.**

The supplied abstracts motivate memory systems and reflective feedback, but do not establish which memory method works best under equal budgets. The next step is a controlled comparison that measures factual recall and correction separately from procedural learning.

**Evidence and limits.** S03 describes MemGPT as managing memory tiers to extend context and reports evaluations in document analysis and multi-session chat. S04 describes Reflexion as storing verbal feedback in episodic memory and reports gains over a baseline across several task types. These are claims in the supplied abstracts, not independent verification or a direct comparison of memory methods. Their results do not establish state of the art for agentic memory. (S03, S04)

**Next experiment.** Test whether external memory improves accurate recall and correction over simple equal-budget baselines. Use the same model, task set, context limit, and total token and tool-call budget for each condition. Compare: (1) no persistent memory, (2) a rolling verbatim transcript or summary, (3) a compact key-value ledger, and (4) retrieved notes. Add a separate reflection condition to test procedural improvement rather than mixing it with factual recall. Include multi-session facts, later corrections, conflicting updates, and questions about both current and superseded facts. Randomize condition order and repeat with multiple task instances. Score exact factual accuracy, correction uptake, stale-fact errors, unsupported answers, tokens, and calls. Report uncertainty and failures, not just averages. The supplied twelve-pair browser trial is a toy demonstration; its repeated easy questions and identical memories cannot establish comparative performance.

**Research plan improvements.** Pre-register hypotheses, budgets, task generation, scoring, and exclusions. Keep factual recall, correction handling, and procedural learning as separate outcomes. Use paired task instances across conditions, audit memory contents for omissions or invented details, and publish prompts, data, and aggregate results where permitted. Treat abstract-level reports as leads for study rather than settled evidence.

Source IDs: S03, S04; see [catalog](../SOURCES.md).

Actual call time: 19200 ms; input tokens 13459; output tokens 910; helper calls 0. Automated research note; not an independently verified result.
