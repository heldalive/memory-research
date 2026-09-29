# Agent memory: the most relevant papers so far

The 18 highest-scoring of the 33 papers read so far that score 8.5 or more for relevance to agent memory. Every one of them is in [memory.csv](memory.csv), with its notes. Scores and labels are the model's readings of the title and abstract; quoted lines are copied from the abstract and checked.

1. **[TRACE: Governing Memory Validity in Evolving Multi-Agent Systems](https://arxiv.org/abs/2609.33517)** · 2026-09 · relevance 10 · tiered memory · method · multi-agent
   TRACE enables multi-agent systems to validate memory validity over time by deciding what memory to act on upon return.
   > TRACE is the only method high on both, reaching 92.6-98.3% valid-information availability with 98.4-99.5% invalid-information rejection on ManBench-Return, within 3.8 points of the best baseline's overall accuracy. On STALE Type II it improves Overall over the strongest comparison policy by 22.3 (Qwen), 18.5 (Gemini), and 27.5 (DeepSeek) points at roughly 2.3 times…
   Benchmarks: Memora, STALE Type II, ManBench-Return

2. **[Remember Before You're Asked: MemDream for Self-Probing Memory Evolution](https://arxiv.org/abs/2609.34545)** · 2026-09 · relevance 9.5 · graph memory · method · assistants
   MemDream enables LLM agents to proactively probe and repair memory before failures occur.
   > Experiments on LoCoMo and MemoryAgentBench demonstrate that MemDream improves answer F1 by 4.5 points on LoCoMo and achieves a 9.1-point higher overall score on MAB over the strongest reactive-evolution baselines.
   Benchmarks: LoCoMo, MemoryAgentBench

3. **[Remember by Asking: Retrieval-Induced Memory Evolution for LLM Agents](https://arxiv.org/abs/2609.34438)** · 2026-09 · relevance 9.5 · retrieval memory · method · assistants
   RIME improves LLM agent memory by evolving it through retrieval-induced evidence integration instead of monolithic compression.
   > Extensive experiments on LoCoMo with Qwen3-235B-A22B and GPT-5.6 Sol show that RIME consistently achieves the best performance across all three quality metrics among the compared methods, while requiring substantially fewer query-time LLM tokens.
   Benchmarks: LoCoMo

4. **[Share-Borne AI Virus: Memory-Hopping Attacks Across LLM Agents](https://arxiv.org/abs/2609.35576)** · 2026-09 · relevance 9 · retrieval memory · study · multi-agent
   The paper studies how adversarial content can spread across LLM agents via shared persistent artifacts.
   > In larger simulated environments, even GPT-5.6 Luna exhibits substantial spread, reaching 60-80% of agents with propagation chains extending to eight hops.

5. **[Self-Evolving Coding Agents: From Digital Programs to Physical-World Intelligence](https://arxiv.org/abs/2609.35432)** · 2026-09 · relevance 9 · parametric memory · method · robotics
   The paper proposes Physical Coding to enable robots to learn from physical experience through executable code traces that evolve over time.
   > On RoboCasa365, HexaAnything improves Composite-Unseen and overall success over XR-1 VLA, and its Harness-trained HexaModel beats the base on every split, indicating code traces internalize physical execution.
   Benchmarks: RoboCasa365, PhyBench, dual-arm AgileX robot

6. **[GenMem: Generative Symbolic Memory for Self-Evolving Harness](https://arxiv.org/abs/2609.34633)** · 2026-09 · relevance 9 · skills memory · method · general
   GenMem enables LLM agents to evolve long-term memory via generative symbolic addressing for stable, efficient retrieval and revision.
   > Under offline memory evolution, experiments spanning ALFWorld, WebShop, multi-hop QA, medical reasoning, and deep research evaluate GenMem against strong memory-augmented baselines...
   Benchmarks: ALFWorld, WebShop, multi-hop QA

7. **[Coding Agent Memory Post-training: Unlocking the Memory Potential of Pre-trained File Operations for Long-Horizon Tasks via Reinforcement Learning](https://arxiv.org/abs/2609.34422)** · 2026-09 · relevance 9 · retrieval memory · method · coding
   The paper trains language model agents to use file-based memory for long-horizon tasks via reinforcement learning in diverse agentic environments.
   > On SWE-bench Verified and MLE-bench Lite, CAMG-RL-4B and CAMG-RL-9B are competitive with Qwen3.5-35B-A3B and Qwen3.5-122B-A10B, respectively.
   Benchmarks: SWE-bench Verified, MLE-bench Lite

8. **[From Attack Success to Attack Severity: Counterfactual Memory Attacks on LLM Agents](https://arxiv.org/abs/2609.34132)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   The paper introduces counterfactual memory regret to measure the severity of memory attacks on LLM agents beyond simple success rates.
   > CMR-guided selection produces substantially larger downstream loss while retaining most of the success-rate gain.

9. **[Self-Designed Evaluators and Warm Memory for Long-Horizon Agents](https://arxiv.org/abs/2609.33717)** · 2026-09 · relevance 9 · unsure memory · method · general
   A language-model agent designs its own evaluators and uses warm memory to improve performance in long-horizon tasks without external rewards.
   > On matched five-repeat benchmarks over tau2-bench and AppWorld, SelfSuite scores above the plain agent without any labels, matches methods given ten expert labels on tau2-bench, and trails Agentic Context Engineering (ACE) on AppWorld, where code execution gives a direct success signal. In an ablation campaign run on the same tasks, it is above label-free ACE in every repeat, and the gated second attempt is the only component whose removal hurts in every repeat. We also simulate a subject-matter expert who grades ten…
   Benchmarks: tau2-bench, AppWorld

10. **[From Experience to Expertise: Adoption-Aware Memory Learning for Data-Scarce NPU Kernel Synthesis](https://arxiv.org/abs/2609.35568)** · 2026-09 · relevance 8.5 · retrieval memory · method · coding
   SAGE uses adoption-aware credit assignment and selective consolidation to improve NPU kernel synthesis in data-scarce settings.
   > On NPUKernelBench, SAGE achieves a 95.5% execution rate versus 84.1% for the strongest controlled baseline, with 86.9% of solved operators outperforming torch\_npu. With GLM-5.3, SAGE achieves a 43.99x speedup over the torch\_npu reference on sparse flash attention.
   Benchmarks: NPUKernelBench

11. **[Continuous Context Management](https://arxiv.org/abs/2609.35540)** · 2026-09 · relevance 8.5 · summaries memory · method · general
   CCM compacts LLM agent memory continuously to reduce prompt size and input usage while improving performance with reinforcement learning guidance.
   > On WebShop, this objective substantially improves CCM over GRPO at both evaluated model scales and surpasses full-history GRPO for Qwen3-4B-Instruct, though not for Qwen3-8B. On Endless Terminals, the augmented method provides a modest improvement over GRPO, with both CCM policies outperforming the untrained full-history baseline. These results demonstrate that CCM is a viable inference paradigm for agents operating with substantially reduced retained context and that its performance can be improved through reinforcement…
   Benchmarks: WebShop, Endless Terminals

12. **[Sprout: Building Dynamic Memory While Reasoning for Agentic Video Understanding](https://arxiv.org/abs/2609.35497)** · 2026-09 · relevance 8.5 · graph memory · method · general
   Sprout builds dynamic memory while reasoning for agentic video understanding, updating memory online as questions are answered.
   > Across benchmarks on three models, Sprout achieves competitive or improved accuracy relative to representative offline memory methods, with no upfront construction stage and lower context cost per question.

13. **[EP-Mem: Elastic Privacy Memory for Social Relationship-Aware LLM Agents](https://arxiv.org/abs/2609.35233)** · 2026-09 · relevance 8.5 · tiered memory · method · assistants
   EP-Mem enables LLM agents to respect long-term social relationship boundaries through user-controlled privacy policies and dynamic disclosure controls.
   > Experiments show that EP-Mem achieves 94.0% privacy classification accuracy, improves disclosure-permission judgment from 22% to 68%, and reduces privacy leakage by 75.6%, while maintaining retrieval performance and cross-benchmark generalization.
   Benchmarks: EP-Bench

14. **[FlowState: Execution State as Memory for Long-Horizon LLM Agents](https://arxiv.org/abs/2609.34565)** · 2026-09 · relevance 8.5 · graph memory · method · assistants
   FlowState uses execution state as memory to improve long-horizon LLM agent performance and efficiency by retaining and revising historical information dynamically.
   > Compared with a full-context baseline using the same DeepSeek-V4-Flash model, FlowState improves the average success rate on MemoryArena and the average pass rate on $tau^3$-Bench by 4.55 and 13.95 percentage points, respectively, while reducing total token consumption by 43.2% and 40.6%..
   Benchmarks: MemoryArena, $tau^3$-Bench

15. **[ReplayLens: Auditing Agents' Use of Outcomes](https://arxiv.org/abs/2609.34177)** · 2026-09 · relevance 8.5 · retrieval memory · tool · coding
   ReplayLens audits which stored memory relationships drive agent decisions in black-box settings.
   > On black-box LLM interfaces, swapping scores changes decisions while moving intact pairs does not, separating score attachment from record order. A bounded-memory study exposes ingestion-order sensitivity that endpoint comparison misses. In sequential experiment planning, altered historical scores redirect exploration and reduce final utility despite fresh measurements. A code-debugging agent with sealed hidden tests shows the same pattern outside model selection. ReplayLens provides a relationship-level audit for deciding…

16. **[StateGuard: Analytical-State Management with Validity-Aware Intervention for Long-Horizon Data Agents](https://arxiv.org/abs/2609.34134)** · 2026-09 · relevance 8.5 · graph memory · method · general
   StateGuard manages analytical state validity in long-horizon data agents using a state graph and validation framework.
   > Experiments on three diverse long-horizon data-analysis benchmarks show that StateGuard consistently improves data-agent performance while reducing dependency-induced downstream error propagation, demonstrating the advantages of explicit analytical-state management for reliable long-horizon data analysis.

17. **[Vestrum: Improving Agent Harnesses by Adapting Their Verification, Structure and Memory](https://arxiv.org/abs/2609.33822)** · 2026-09 · relevance 8.5 · retrieval memory · method · unsure
   Vestrum improves agent harnesses by adapting verification, structure, and memory without retraining the model.
   > Across five settings and two baseline harnesses, the frozen harnesses improve held-out performance: UltraHorizon rises from 47.6 to 59.8 over GAM, Terminal-Bench 4 Hard from 63.7% to 70.3% of checks passed over Claude Code on eight held-out tasks at 1.03x test cost, and cell-type annotation agreement from 67.5% to 77.8% on held-out sections of one slide, alongside gains on LoCo…
   Benchmarks: UltraHorizon, Terminal-Bench 4 Hard, LoCoMo, AMA-Bench

18. **[Characterizing Memory Misalignment in Human-LLM Interaction From User Perspectives](https://arxiv.org/abs/2609.33623)** · 2026-09 · relevance 8.5 · retrieval memory · study · assistants
   The paper identifies and addresses memory misalignment in human-LLM interactions from user perspectives through mixed methods and co-design workshops.
   > Synthesizing these findings, we highlight the tension between supervisory agency and interaction overhead, and advocate for friction-aware memories that balance user oversight with conversation smoothness.
