# Agent memory: the most relevant papers so far

The 80 highest-scoring of the 144 papers read so far that score 8.5 or more for relevance to agent memory. Every one of them is in [memory.csv](memory.csv), with its notes. Scores and labels are the model's readings of the title and abstract; quoted lines are copied from the abstract and checked.

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

4. **[EngramRAG: Dynamic Usage-Weighted Topology and Synaptic Consolidation for Multi-Hop Agentic Memory](https://arxiv.org/abs/2609.32049)** · 2026-09 · relevance 9.5 · graph memory · method · assistants
   EngramRAG improves multi-hop memory in agents with dynamic, usage-weighted topology and synaptic consolidation.
   > Evaluating on all 1,982 QA pairs across 10 long-term conversations in the LoCoMo benchmark, EngramRAG achieves +38.9% relative improvement in Recall@5 (53.21% vs. 38.29%, p \< 0.001) and +43.1% in MRR (0.4203 vs. 0.2937) over dense vector RAG, significantly outperforming Okapi BM2…
   Benchmarks: LoCoMo

5. **[RPMem: Learning Long-Term Recurrent Parametric Memory Across Sessions for LLM Agents](https://arxiv.org/abs/2609.23466)** · 2026-09 · relevance 9.5 · parametric memory · method · assistants
   RPMem introduces a parametric memory framework that evolves across sessions and transfers across LLM backbones.
   > With Qwen3-8B on PERMA, RPMem reaches 85.52%, outperforming the strongest parametric and text-based baselines by 5.32 and 12.98 percentage points, respectively.
   Benchmarks: PERMA

6. **[Share-Borne AI Virus: Memory-Hopping Attacks Across LLM Agents](https://arxiv.org/abs/2609.35576)** · 2026-09 · relevance 9 · retrieval memory · study · multi-agent
   The paper studies how adversarial content can spread across LLM agents via shared persistent artifacts.
   > In larger simulated environments, even GPT-5.6 Luna exhibits substantial spread, reaching 60-80% of agents with propagation chains extending to eight hops.

7. **[Self-Evolving Coding Agents: From Digital Programs to Physical-World Intelligence](https://arxiv.org/abs/2609.35432)** · 2026-09 · relevance 9 · parametric memory · method · robotics
   The paper proposes Physical Coding to enable robots to learn from physical experience through executable code traces that evolve over time.
   > On RoboCasa365, HexaAnything improves Composite-Unseen and overall success over XR-1 VLA, and its Harness-trained HexaModel beats the base on every split, indicating code traces internalize physical execution.
   Benchmarks: RoboCasa365, PhyBench, dual-arm AgileX robot

8. **[GenMem: Generative Symbolic Memory for Self-Evolving Harness](https://arxiv.org/abs/2609.34633)** · 2026-09 · relevance 9 · skills memory · method · general
   GenMem enables LLM agents to evolve long-term memory via generative symbolic addressing for stable, efficient retrieval and revision.
   > Under offline memory evolution, experiments spanning ALFWorld, WebShop, multi-hop QA, medical reasoning, and deep research evaluate GenMem against strong memory-augmented baselines...
   Benchmarks: ALFWorld, WebShop, multi-hop QA

9. **[Coding Agent Memory Post-training: Unlocking the Memory Potential of Pre-trained File Operations for Long-Horizon Tasks via Reinforcement Learning](https://arxiv.org/abs/2609.34422)** · 2026-09 · relevance 9 · retrieval memory · method · coding
   The paper trains language model agents to use file-based memory for long-horizon tasks via reinforcement learning in diverse agentic environments.
   > On SWE-bench Verified and MLE-bench Lite, CAMG-RL-4B and CAMG-RL-9B are competitive with Qwen3.5-35B-A3B and Qwen3.5-122B-A10B, respectively.
   Benchmarks: SWE-bench Verified, MLE-bench Lite

10. **[From Attack Success to Attack Severity: Counterfactual Memory Attacks on LLM Agents](https://arxiv.org/abs/2609.34132)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   The paper introduces counterfactual memory regret to measure the severity of memory attacks on LLM agents beyond simple success rates.
   > CMR-guided selection produces substantially larger downstream loss while retaining most of the success-rate gain.

11. **[Self-Designed Evaluators and Warm Memory for Long-Horizon Agents](https://arxiv.org/abs/2609.33717)** · 2026-09 · relevance 9 · unsure memory · method · general
   A language-model agent designs its own evaluators and uses warm memory to improve performance in long-horizon tasks without external rewards.
   > On matched five-repeat benchmarks over tau2-bench and AppWorld, SelfSuite scores above the plain agent without any labels, matches methods given ten expert labels on tau2-bench, and trails Agentic Context Engineering (ACE) on AppWorld, where code execution gives a direct success signal. In an ablation campaign run on the same tasks, it is above label-free ACE in every repeat, and the gated second attempt is the only component whose removal hurts in every repeat. We also simulate a subject-matter expert who grades ten…
   Benchmarks: tau2-bench, AppWorld

12. **[NLPG: Natural-Language Policy Gradients for Self-Evolving Language Agents](https://arxiv.org/abs/2609.33379)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   NLPG improves fixed language agents via natural-language policy updates without changing model parameters or program structure.
   > Across six benchmarks covering memory, reasoning, instruction following, and evidence verification, NLPG also outperforms the strongest listed baseline for each benchmark by 8.71 percentage points on average.

13. **[LSTMem: Hierarchical Long Short-Term Online Memory for Large Language Models](https://arxiv.org/abs/2609.33268)** · 2026-09 · relevance 9 · parametric memory · method · assistants
   LSTMem introduces a hierarchical, LSTM-inspired memory system that separates memory accumulation from expression in large language models.
   > Across memory benchmarks on Qwen3-4B-Instruct, LSTMem consistently improves MemoryAgentBench, LoCoMo, and HotpotQA over the plain backbone.
   Benchmarks: MemoryAgentBench, LoCoMo, HotpotQA

14. **[ECG-Scroll: A Long-Horizon, Streaming Benchmark and Agent Environment for Interpretation of Ambulatory Electrocardiograms](https://arxiv.org/abs/2609.33117)** · 2026-09 · relevance 9 · unsure memory · benchmark · science
   The paper introduces ECG-Scroll, a streaming benchmark and agent environment for long-horizon, online interpretation of ambulatory ECGs.
   > We release 390 whole-recording instances spanning 2,536 hours of two-lead ambulatory ECG and evaluate a signal-threshold rule agent alongside off-the-shelf LLM agents online, characterizing how they use memory, tools, and planning and where the benchmark's head-room lies.
   Benchmarks: ECG-Scroll

15. **[Contract Memory Compiler: Resolve, Then Traverse](https://arxiv.org/abs/2609.32658)** · 2026-09 · relevance 9 · retrieval memory · method · general
   The paper introduces a compiler that selects evidence before resolving updates to improve multi-hop question answering with external memory.
   > CMC achieves state-of-the-art multi-hop accuracy on FactConsolidation, reaching 78.25% overall and 61.0% at 262K.
   Benchmarks: FactConsolidation

16. **[BMA: Backchain Memory Attacks Create Unauthorized Control Paths in LLM Agents](https://arxiv.org/abs/2609.32186)** · 2026-09 · relevance 9 · retrieval memory · unsure · unsure
   BMA creates unauthorized control paths in LLM agents by manipulating memory to trigger protected actions without altering tasks or writing memory directly.
   > BMA achieves 18.8% Macro Path-CASR, compared with 13.4% for the strongest access-matched baseline. Of BMA's behavioral hits, 60.3% pass all registered pathway and intervention checks versus 36.7% for the baseline. Frozen BMA edits retain 78.0% of their certified effect on average across four held-out consolidation policies. Representative memory-side controls leave 11.0% Path-CASR, whereas provenance-bound authorization reduces it to…

17. **[Governed AI-Agent Coordination for Dementia Care: Architecture, Safety Contracts, and Evidence-Derived Workflow Verification](https://arxiv.org/abs/2609.25956)** · 2026-09 · relevance 9 · tiered memory · method · multi-agent
   The paper proposes GCAC, an architecture for safe, evidence-driven AI-agent coordination in dementia care with governance and workflow verification.
   > GCAC satisfies all 18 contract oracles with zero policy-violating tool calls and correctly preserves obligations, rejects stale state, creates human hand-offs, and records workflow closure.

18. **[MemCalib: Benchmarking and Optimizing Memory Use in LLM Agents](https://arxiv.org/abs/2609.24259)** · 2026-09 · relevance 9 · parametric memory · benchmark · unsure
   MemCalib introduces a benchmark and optimization method to improve how LLM agents use memory in context.
   > Results across model families and scales (Qwen3-8B, Ministral-3-8B-Instruct, and Qwen3.5-35B-A3B) show that MemCalib-RL achieves the best overall performance while better balancing over-use and under-use, with gains generalizing beyond MemCalib in external benchmark evaluation.
   Benchmarks: MemCalib

19. **[Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986)** · 2026-09 · relevance 9 · retrieval memory · method · general
   Jev-Mem introduces a System-One/Two-inspired memory system for faster, more efficient AI agent memory operations.
   Benchmarks: LoCoMo

20. **[PSD: Pseudo Self-Distillation of Memory Representation Capabilities for LLM Agents](https://arxiv.org/abs/2609.23449)** · 2026-09 · relevance 9 · parametric memory · method · unsure
   PSD enables small models to learn memory representations by distilling from a large oracle via prompts, reducing cost and improving efficiency for LLM agents.
   > On LoCoMo, PSD-trained Qwen3-0.6B, 1.7B, and 4B match or exceed GPT-4.1-mini on downstream retrieval at a fraction of the deployment cost, with off-policy PSD achieving the strongest results across most conditions.
   Benchmarks: LoCoMo, LongMemEval

21. **[AutoViewMem: Self-Configuring Orthogonal Views for Conversational Long-Term Memory](https://arxiv.org/abs/2609.21940)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   AutoViewMem creates self-configuring, low-overlap semantic views for conversational long-term memory to improve retrieval accuracy and personalization.
   > Experiments on the LoCoMo and PersonaMem benchmarks, under both Qwen3-8B and Qwen3-14B backbones, show that AutoViewMem improves long-horizon question answering and personalization over strong memory baselines while preserving a simple inference pipeline.
   Benchmarks: LoCoMo, PersonaMem

22. **[Self-Emergence Agent Architecture:Behavior-Inertia HMM, Reflexive Metacognition,and Social-Contrastive Self-Modeling](https://arxiv.org/abs/2609.17331)** · 2026-09 · relevance 9 · tiered memory · method · multi-agent
   SEAA introduces a self-emerging agent architecture with behavioral inertia, metacognition, and social contrastive modeling.
   > A language-model-free prototype shows the loop spontaneously breaks symmetry: initially identical agents consolidate distinct, stable personalities whereas matched controls do not.

23. **[Interactive Memory Learning for Long-Term Conversations](https://arxiv.org/abs/2609.17088)** · 2026-09 · relevance 9 · parametric memory · method · assistants
   ICML proposes an interactive memory framework that enables agents to learn and evolve memory policies through reinforcement learning for long-term conversations.
   > Experimental results demonstrate that ICML significantly outperforms strong baselines, exhibiting the unique capability to continuously improve response quality as interactions accumulate.

24. **[AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://arxiv.org/abs/2609.15457)** · 2026-09 · relevance 9 · tiered memory · method · web
   AnchorGUI uses asymmetric memory to improve GUI navigation through dual-scale learning with visual and textual evidence.
   Benchmarks: AndroidWorld

25. **[EMR: Self-Evolving Medical Multi-Agent System via Experience Mining and Reuse](https://arxiv.org/abs/2609.15161)** · 2026-09 · relevance 9 · retrieval memory · method · multi-agent
   EMR presents a self-evolving medical multi-agent system that learns from and reuses clinical experience for improved diagnosis.
   > Experiments on medical reasoning benchmarks demonstrate that EMR consistently outperforms state-of-the-art medical multi-agent baselines.

26. **[CoMem: Collective-Individual Memory Synergy for Evolutionary Multi-Agent Systems](https://arxiv.org/abs/2609.15009)** · 2026-09 · relevance 9 · retrieval memory · method · multi-agent
   CoMem introduces a collective-individual memory synergy framework for multi-agent systems to improve learning and avoid memory pollution.
   > Experiments on ALFWorld and PDDL benchmarks show that CoMem achieves strong overall performance and robustly avoids memory pollution.
   Benchmarks: ALFWorld, PDDL

27. **[MemRiskBench: Trace-Aware Risk-Preserving Evaluation for Long-Horizon LLM Agents](https://arxiv.org/abs/2609.14976)** · 2026-09 · relevance 9 · tiered memory · benchmark · unsure
   MemRiskBench evaluates LLM agents with trace-aware, risk-preserving benchmarks that detect rare but severe memory risks.
   > Second, a risk-preserving subset selector: a coverage-constrained greedy selector on deterministic trace-derived features that retains full ranking (Spearman rho = 0.975, deterministic; CI collapses to a point estimate with zero bootstrap variance), risk coverage (1.0), and high-risk model detection (1.0) at a 20% subset size, reducing compute 5x.
   Benchmarks: MemRiskBench

28. **[From Experience to Expertise: Adoption-Aware Memory Learning for Data-Scarce NPU Kernel Synthesis](https://arxiv.org/abs/2609.35568)** · 2026-09 · relevance 8.5 · retrieval memory · method · coding
   SAGE uses adoption-aware credit assignment and selective consolidation to improve NPU kernel synthesis in data-scarce settings.
   > On NPUKernelBench, SAGE achieves a 95.5% execution rate versus 84.1% for the strongest controlled baseline, with 86.9% of solved operators outperforming torch\_npu. With GLM-5.3, SAGE achieves a 43.99x speedup over the torch\_npu reference on sparse flash attention.
   Benchmarks: NPUKernelBench

29. **[Continuous Context Management](https://arxiv.org/abs/2609.35540)** · 2026-09 · relevance 8.5 · summaries memory · method · general
   CCM compacts LLM agent memory continuously to reduce prompt size and input usage while improving performance with reinforcement learning guidance.
   > On WebShop, this objective substantially improves CCM over GRPO at both evaluated model scales and surpasses full-history GRPO for Qwen3-4B-Instruct, though not for Qwen3-8B. On Endless Terminals, the augmented method provides a modest improvement over GRPO, with both CCM policies outperforming the untrained full-history baseline. These results demonstrate that CCM is a viable inference paradigm for agents operating with substantially reduced retained context and that its performance can be improved through reinforcement…
   Benchmarks: WebShop, Endless Terminals

30. **[Sprout: Building Dynamic Memory While Reasoning for Agentic Video Understanding](https://arxiv.org/abs/2609.35497)** · 2026-09 · relevance 8.5 · graph memory · method · general
   Sprout builds dynamic memory while reasoning for agentic video understanding, updating memory online as questions are answered.
   > Across benchmarks on three models, Sprout achieves competitive or improved accuracy relative to representative offline memory methods, with no upfront construction stage and lower context cost per question.

31. **[EP-Mem: Elastic Privacy Memory for Social Relationship-Aware LLM Agents](https://arxiv.org/abs/2609.35233)** · 2026-09 · relevance 8.5 · tiered memory · method · assistants
   EP-Mem enables LLM agents to respect long-term social relationship boundaries through user-controlled privacy policies and dynamic disclosure controls.
   > Experiments show that EP-Mem achieves 94.0% privacy classification accuracy, improves disclosure-permission judgment from 22% to 68%, and reduces privacy leakage by 75.6%, while maintaining retrieval performance and cross-benchmark generalization.
   Benchmarks: EP-Bench

32. **[FlowState: Execution State as Memory for Long-Horizon LLM Agents](https://arxiv.org/abs/2609.34565)** · 2026-09 · relevance 8.5 · graph memory · method · assistants
   FlowState uses execution state as memory to improve long-horizon LLM agent performance and efficiency by retaining and revising historical information dynamically.
   > Compared with a full-context baseline using the same DeepSeek-V4-Flash model, FlowState improves the average success rate on MemoryArena and the average pass rate on $tau^3$-Bench by 4.55 and 13.95 percentage points, respectively, while reducing total token consumption by 43.2% and 40.6%..
   Benchmarks: MemoryArena, $tau^3$-Bench

33. **[ReplayLens: Auditing Agents' Use of Outcomes](https://arxiv.org/abs/2609.34177)** · 2026-09 · relevance 8.5 · retrieval memory · tool · coding
   ReplayLens audits which stored memory relationships drive agent decisions in black-box settings.
   > On black-box LLM interfaces, swapping scores changes decisions while moving intact pairs does not, separating score attachment from record order. A bounded-memory study exposes ingestion-order sensitivity that endpoint comparison misses. In sequential experiment planning, altered historical scores redirect exploration and reduce final utility despite fresh measurements. A code-debugging agent with sealed hidden tests shows the same pattern outside model selection. ReplayLens provides a relationship-level audit for deciding…

34. **[StateGuard: Analytical-State Management with Validity-Aware Intervention for Long-Horizon Data Agents](https://arxiv.org/abs/2609.34134)** · 2026-09 · relevance 8.5 · graph memory · method · general
   StateGuard manages analytical state validity in long-horizon data agents using a state graph and validation framework.
   > Experiments on three diverse long-horizon data-analysis benchmarks show that StateGuard consistently improves data-agent performance while reducing dependency-induced downstream error propagation, demonstrating the advantages of explicit analytical-state management for reliable long-horizon data analysis.

35. **[Vestrum: Improving Agent Harnesses by Adapting Their Verification, Structure and Memory](https://arxiv.org/abs/2609.33822)** · 2026-09 · relevance 8.5 · retrieval memory · method · unsure
   Vestrum improves agent harnesses by adapting verification, structure, and memory without retraining the model.
   > Across five settings and two baseline harnesses, the frozen harnesses improve held-out performance: UltraHorizon rises from 47.6 to 59.8 over GAM, Terminal-Bench 4 Hard from 63.7% to 70.3% of checks passed over Claude Code on eight held-out tasks at 1.03x test cost, and cell-type annotation agreement from 67.5% to 77.8% on held-out sections of one slide, alongside gains on LoCo…
   Benchmarks: UltraHorizon, Terminal-Bench 4 Hard, LoCoMo, AMA-Bench

36. **[Characterizing Memory Misalignment in Human-LLM Interaction From User Perspectives](https://arxiv.org/abs/2609.33623)** · 2026-09 · relevance 8.5 · retrieval memory · study · assistants
   The paper identifies and addresses memory misalignment in human-LLM interactions from user perspectives through mixed methods and co-design workshops.
   > Synthesizing these findings, we highlight the tension between supervisory agency and interaction overhead, and advocate for friction-aware memories that balance user oversight with conversation smoothness.

37. **[ActiveMem: Dynamic Latent Memory Trees for Long-Horizon Agents](https://arxiv.org/abs/2609.33244)** · 2026-09 · relevance 8.5 · graph memory · method · general
   ActiveMem uses dynamic latent memory trees to improve long-horizon agent reasoning with procedural dependency preservation and continuous adaptation.
   > Experiments across various agent benchmarks demonstrate that ActiveMem consistently improves task completion, reasoning stability, and memory efficiency over existing memory-based agents. Moreover, ActiveMem enables compact open-weight models to achieve competitive performance with substantially larger proprietary systems.

38. **[Beyond Memory Construction: Rethinking Memory Access for LLM-based Conversational Agents](https://arxiv.org/abs/2609.33226)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   Threader improves memory access for LLM agents by shifting from construction to efficient, structure-aware retrieval over raw interactions.
   > Extensive experiments demonstrate that Threader consistently improves answer accuracy and evidence recall, while significantly reducing the memory construction overhead.

39. **[The Epistemics of Agent Memory: Measuring, and Governing, the Consolidation Decision in Long-Horizon LLM Agents](https://arxiv.org/abs/2609.33013)** · 2026-09 · relevance 8.5 · skills memory · unsure · assistants
   The paper develops a framework for measuring and governing memory consolidation in long-horizon LLM agents through four phases of research.
   > On that question we report a resolved negative: after a graded-reuse redesign removed a structural ceiling, a two-benchmark study with 2,532 real answer cells finds the quality score does not predict real transfer accuracy (pooled Spearman $rho= -0.24$, n = 12, CI spanning zero).
   Benchmarks: ConsolidationBench

40. **[Tessera: Demand-Driven KV Cache Management for Retrieval-Augmented LLM Serving](https://arxiv.org/abs/2609.32999)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   Tessera enables demand-driven KV cache management for RAG and agent-memory workloads by using retrieval to coordinate cache reuse and request routing.
   > Tessera lowers mean TTFT by up to 3.6x over SGLang and LMCache with EPIC at matched request rates, and sustains low TTFT at rates where the baselines saturate, while matching the answer quality of the underlying composition policy.

41. **[ARSM: Auto-Regressive State Machine for Agentic Reasoning Compression](https://arxiv.org/abs/2609.32852)** · 2026-09 · relevance 8.5 · compression memory · method · general
   ARSM compresses reasoning in agentic tasks with a lightweight, training-free framework that maintains performance while reducing token usage.
   > ARSM maintains the task performance while simultaneously reducing token consumption, offering a practical, cost-effective route toward scalable autonomous agents for long-horizon tasks.
   Benchmarks: Webshop, Multi-Objective Multi-Hop QA, SWE-Bench Lite

42. **[Decision-Sufficient State Representations: Measuring and Reducing Write-Time Regret](https://arxiv.org/abs/2609.32805)** · 2026-09 · relevance 8.5 · summaries memory · method · games
   The paper trains LLM writers to reduce regret by choosing better state representations for long tasks.
   > On a pre-registered test split opened once, training adds +7.0 \[+1.9, +12.2\] points of success when facts are needed soon...
   Benchmarks: TextWorld

43. **[Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)** · 2026-09 · relevance 8.5 · retrieval memory · method · general
   FASE uses episodic memory and online policy learning to let LLM agents self-evolve via feedback from past forecasting instances without parameter updates.
   > Across these 29 configurations, FASE attains the strongest aggregate point forecasting performance among the evaluated methods and reduces the normalised MAE by 9.1% relative to the best individual foundation model baseline.
   Benchmarks: GIFT-Eval

44. **[EMIR$^2$: Evolution-Aware Memory with Intent-Guided Multi-Round Retrieval](https://arxiv.org/abs/2609.32584)** · 2026-09 · relevance 8.5 · graph memory · method · assistants
   EMIR$^2$ enables LLM agents to maintain evolving long-term memory with intent-guided, multi-round retrieval for better historical knowledge adaptation and evidence tracing.
   Benchmarks: LoCoMo, MemConflict

45. **[Learning from Others, Acting for You: Cross-User Memory Sharing for LLM Agents](https://arxiv.org/abs/2609.32511)** · 2026-09 · relevance 8.5 · retrieval memory · method · web
   ShareMem enables LLM agents to share reusable experiences while grounding them in receiving users' preferences for improved task performance.
   > It improves step success, average task success, and dialogue-macro coding scores, respectively, over matched user-local memory across all four models.
   Benchmarks: Mind2Web, VitaBench~2.0, MemoryCode

46. **[Shared Worlds, Private Minds: Structured Memory for Long-Form Writing as World Creation](https://arxiv.org/abs/2609.32401)** · 2026-09 · relevance 8.5 · graph memory · method · games
   NarraWorld creates a structured memory system for long-form writing by treating memory as world creation with four interconnected views.
   > Across three writing benchmarks, NarraWorld achieves the strongest aggregate results. Its memory also transfers to situated role-playing and largely preserves recall on a general-purpose long-term memory benchmark, paving the way for agents that sustain coherent storyworlds across diverse narrative tasks.

47. **[Enabling Timely Guidance before Skill Retrieval: Retaining Helpful Warm Tips in Agent Context](https://arxiv.org/abs/2609.32339)** · 2026-09 · relevance 8.5 · skills memory · method · coding
   TipsWarm provides timely, low-cost skill guidance by storing and injecting useful 'warm tips' into agent conversations before skill retrieval.
   > In three coding and iterative task-execution benchmarks, TipsWarm achieves the highest task success rate while remaining time-efficient, compared to recent skill and general memory baselines.

48. **[MemTransfer: Benchmarking Memory Beyond Matched Experience in Embodied Decision-Making](https://arxiv.org/abs/2609.32313)** · 2026-09 · relevance 8.5 · retrieval memory · benchmark · robotics
   MemTransfer benchmarks memory representations in embodied agents under changing conditions.
   > At the new test start, increasing from one to four relevant demonstrations raises Episodic success by 14.3 percentage points, while the other evaluated representations gain no more than 1.3 percentage points.

49. **[Before Answering: Evidence Sufficiency under Size-Matched Memory Construction](https://arxiv.org/abs/2609.32269)** · 2026-09 · relevance 8.5 · retrieval memory · unsure · assistants
   The paper proposes a size-matched method to detect insufficient evidence in memory for AI agents without leaking labels through memory size.
   Benchmarks: MuSiQue, HotpotQA

50. **[LAM: Efficient Lossy Agent Memory Framework With A Retrieval-Score Error Bound](https://arxiv.org/abs/2609.32256)** · 2026-09 · relevance 8.5 · summaries memory · method · general
   LAM reduces agent memory size with a bounded loss of information while improving inference speed.
   > On 600 agent trajectories, LAM removes 22.47% of observation tokens while retaining 99.984% of the measured gold-patch evidence.

51. **[BioDyad: Synchronize Biomedical Discovery and Machine Learning Engineering](https://arxiv.org/abs/2609.31939)** · 2026-09 · relevance 8.5 · graph memory · method · science
   BioDyad synchronizes biomedical discovery and ML engineering using Monte Carlo graph search with two hierarchies for improved program execution across tasks.
   > It achieves the highest penalized all-task score and task success rate among four agent methods and a one-shot baseline under each backend.

52. **[COUNTERMEM: World-Model Verified Counter-Factual Memory for Language Agents](https://arxiv.org/abs/2609.31874)** · 2026-09 · relevance 8.5 · retrieval memory · method · general
   COUNTERMEM creates verified counterfactual memory using executable world models to improve language agent performance across tasks.
   > With gpt-oss-120b, COUNTERMEM improves both ReAct and Reflexion on all 12 benchmarks across six domains, averaging a gain of 12.6 percentage points over their unaugmented versions.
   Benchmarks: ReAct, Reflexion

53. **[ActKV: Efficient LLM Agents through Action-Guided KV Cache Management](https://arxiv.org/abs/2609.31395)** · 2026-09 · relevance 8.5 · compression memory · method · general
   ActKV compresses KV caches by prioritizing action-critical entries for agentic LLM inference, improving efficiency and throughput.
   > On long-trace tasks, ActKV retains an average of 98.53% of FullKV's accuracy with only 25.98% of its peak KV cache memory. It also achieves 3.97 times and 3.58 times FullKV's token and task throughput, delivering state-of-the-art performance.

54. **[MACBT: A Multi-Agent Cognitive Behavioral Therapy Decision Support System with Longitudinal Memory](https://arxiv.org/abs/2609.30939)** · 2026-09 · relevance 8.5 · tiered memory · method · multi-agent
   MACBT provides a multi-agent CBT decision support system with longitudinal memory for improved clinical efficiency and session quality.
   > The full memory-augmented system further improves session quality by 12.6% and achieves a longitudinal mean of 2.29 on cross-session continuity, intervention progression, and personalization.
   Benchmarks: GPT-4 judges

55. **[Qwen-Planner-Agent: A Closed-Loop AI-for-AI Framework for Real-World Mobile Planner Agents](https://arxiv.org/abs/2609.29892)** · 2026-09 · relevance 8.5 · tiered memory · method · multi-agent
   Qwen-Planner-Agent uses a closed-loop AI-for-AI framework to improve mobile planning through AI-driven data, training, and model-harness co-evolution.
   > Qwen-Planner-Agent achieves the best overall performance among all evaluated models and systems on MobilePA-Bench, improving over its base model across tool use, memory, skills, and sub-agent coordination. Further evaluations of our model show improvements across non-mobile agentic benchmarks while largely preserving general capabilities.
   Benchmarks: MobilePA-Bench

56. **[Scope Before You Persist: Preventing Cross-Family Interference in Agent Memory](https://arxiv.org/abs/2609.29144)** · 2026-09 · relevance 8.5 · retrieval memory · study · coding
   The paper shows that matching retrieval scope to certification scope improves agent memory reliability by preventing cross-family interference.
   Benchmarks: ProcStream-RSI

57. **[Agent Memory with Episodic Retrieval for Financial Decision-Making](https://arxiv.org/abs/2609.28771)** · 2026-09 · relevance 8.5 · retrieval memory · method · multi-agent
   META introduces an episodic-memory-augmented multi-agent framework for improved financial decision-making with regime-aware, interpretable, and low-latency trading.
   > META achieves improved directional accuracy and robustness under short-horizon evaluation.

58. **[Learning from Failures: Heterogeneous Graph Memory for Small Language Model Tool-Using Agents](https://arxiv.org/abs/2609.28003)** · 2026-09 · relevance 8.5 · graph memory · method · unsure
   FRESH uses heterogeneous graph memory to help small language models avoid failures in tool-using agents by preserving causal context and safety conditions.
   > Experiments on $tau$-Bench and AppWorld with multiple open-source models show that FRESH consistently improves task success and tool-use reliability over no-memory agents and representative memory-based baselines.
   Benchmarks: $tau$-Bench, AppWorld

59. **[Memory Control Signals Emerge Before Action in Long Horizon Agents](https://arxiv.org/abs/2609.27286)** · 2026-09 · relevance 8.5 · parametric memory · method · assistants
   The paper discovers that memory control signals emerge before actions in long-horizon agents and proposes PaMER to reduce context use while maintaining performance.
   Benchmarks: WorkBuddyBench

60. **[ChipMEM: Verification-Grounded Memory for EDA Agents](https://arxiv.org/abs/2609.27067)** · 2026-09 · relevance 8.5 · skills memory · method · coding
   ChipMEM introduces a verification-grounded memory layer for EDA agents that enables cross-task skill transfer through procedural and statistical memory components.
   Benchmarks: RTLRewriter-Bench, CVDP

61. **[Hot-Cold Tiering of HBM and High Bandwidth Flash for Agentic LLM Serving](https://arxiv.org/abs/2609.25782)** · 2026-09 · relevance 8.5 · tiered memory · method · coding
   The paper proposes a hot-cold memory hierarchy using HBM for frequent KV accesses and HBF for rare, resumed sessions in agentic LLM serving.
   Benchmarks: Qwen3-Coder-30B-A3B

62. **[From Pattern Recognizers to Personalized Companions: A Survey of Large Language Models in Mental Health](https://arxiv.org/abs/2609.25186)** · 2026-09 · relevance 8.5 · tiered memory · survey · assistants
   This survey traces the evolution of LLMs in mental health through three phases: passive tools, empathetic conversationalists, and personalized cognitive companions.
   > Viewing the field through this developmental lens, we provide a comprehensive synthesis of existing work, an insightful narrative of its trajectory, and a clear roadmap for future innovation in responsible, effective, and human-centered AI for mental healthcare.

63. **[Machine-Interpretable Information: Compiling Documents into Searchable and Readable Protocol States](https://arxiv.org/abs/2609.23371)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   The paper introduces Machine-Interpretable Information (MII) to compile documents into transferable, searchable, and readable protocol states for agent-to-agent memory sharing.
   > On HotpotQA (7,405 queries), Residual-MII exceeds full-context Exact Match at approximately 7% of the attention FLOPs, suggesting a paradigm shift toward compiled, transferable neural document formats.
   Benchmarks: HotpotQA

64. **[OptiSkill: A Hierarchical and Evolving SkillBank for LLM-Based Optimization Modeling](https://arxiv.org/abs/2609.22987)** · 2026-09 · relevance 8.5 · skills memory · method · assistants
   OptiSkill builds a hierarchical, evolving SkillBank to improve LLM-based OR modeling through reusable, solver-verified formulation skills.
   > Experiments on eight OR modeling benchmarks show that OptiSkill improves formulation accuracy across LLM backbones, outperforms strong agentic baselines, and gains further by expanding SkillBank coverage and reliability.
   Benchmarks: eight OR modeling benchmarks

65. **[The Price of Safety: Benign-Case Utility and Token Overhead of Memory-Poisoning Defenses in LLM Agents](https://arxiv.org/abs/2609.22818)** · 2026-09 · relevance 8.5 · retrieval memory · study · assistants
   The paper evaluates the real-world cost of memory-poisoning defenses in LLM agents under benign conditions.

66. **[MACE: Memory-Agent Co-Evolution with Adaptive Memory Graphs for Multi-Agent Systems](https://arxiv.org/abs/2609.21533)** · 2026-09 · relevance 8.5 · graph memory · method · multi-agent
   MACE improves memory retention and retrieval in multi-agent systems by co-evolving memory structure and agent usage through feedback loops.
   > Across eight benchmarks, MACE outperforms ten baselines with an average score of 81.11%, compared with 78.97% for the strongest baseline, SAGE.

67. **[ArenaFlow: From Trajectory Ranking to Hierarchical Credit Propagation for Open-Ended Agent RL](https://arxiv.org/abs/2609.21378)** · 2026-09 · relevance 8.5 · skills memory · method · general
   ArenaFlow uses hierarchical credit propagation to improve open-ended agent RL through step-level and skill-level supervision from pairwise comparisons.
   > Extensive experiments validate ArenaFlow's effectiveness on open-ended agent tasks.

68. **[CoLearn: An Agentic Tutor that Learns its Learner in a Human--AI Co-Learning Loop](https://arxiv.org/abs/2609.21154)** · 2026-09 · relevance 8.5 · tiered memory · method · assistants
   CoLearn presents an AI tutor that learns the learner's mastery and misconceptions in real time to deliver personalized questions.
   > In blind A/B evaluation, questions conditioned on this memory are preferred over non-personalised ones 68-69% of the time, and in persona simulations with hidden ground-truth mastery the agent's belief converges toward the learner's true mastery.

69. **[Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks](https://arxiv.org/abs/2609.19913)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   The paper presents a digital twin framework using LLMs to simulate realistic opinion dynamics in social networks.
   > The results show that the capability of the proposed framework reproduces opinion trajectories and reduces individual prediction error by more than 50% compared to the best-performing classical baseline (Mistral-7B achieves Mean Absolute Error (MAE) = 0.150 and 0.121 on the COVID-19 and US Election 2020 datasets, respectively). We observe similar improvements in structural alignment (Delta\_r = 0.120 and 0.180) and polarization dynamics (…
   Benchmarks: COVID-19 discourse, U.S elections 2020

70. **[Self-Evolving Search Index](https://arxiv.org/abs/2609.19656)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   SELF-INDEX enables an index to self-evolve without human intervention by autonomously diagnosing and revising index keys based on retrieval performance and simulated queries.
   > Across diverse corpora and retrievers, SELF-INDEX consistently improves retrieval performance while outperforming existing index optimization methods. We further show that these benefits extend to downstream applications, improving the effectiveness and efficiency of search agents and helping agent memory systems retrieve useful past interactions.

71. **[Clueing up LLMs with Tool-Augmented Deductive Reasoning](https://arxiv.org/abs/2609.18736)** · 2026-09 · relevance 8.5 · graph memory · method · games
   The paper evaluates tool-augmented deductive reasoning in a multi-agent Clue game to improve logical consistency and task success over extended interactions.
   > We compare this approach against the baseline to evaluate how tool augmentation supports reasoning quality and task success for autonomous agents in a strategic reasoning environment.

72. **[Rollback the World, Keep the Reflection: Rollback-Induced Reflection for Long-Horizon LLM Agents](https://arxiv.org/abs/2609.18304)** · 2026-09 · relevance 8.5 · summaries memory · method · general
   RIR enables LLM agents to rollback execution and retain useful knowledge for better long-horizon task performance.
   > Experiments on three long-horizon benchmarks show that RIR consistently improves average task performance across multiple LLM backbones, with structured reflection memory preserving useful experience and selective rollback enabling efficient recovery.

73. **[WFM: Wiki Foundation Model for Complex Agentic Reasoning](https://arxiv.org/abs/2609.18182)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   WFM proposes a Wiki Foundation Model for scalable, agent-native knowledge representation and retrieval with dense semantic contexts and efficient distributed training.
   > Extensive evaluations across five long-term agent memory and multi-hop reasoning benchmarks demonstrate the remarkable performance of WFM, while achieving a 10.5 times training acceleration on distributed clusters.

74. **[Agora: Git as Shared Memory for Collective AutoResearch](https://arxiv.org/abs/2609.18094)** · 2026-09 · relevance 8.5 · graph memory · method · multi-agent
   Agora uses Git-like shared memory to enable research agents to collaborate and build on each other's work without central control.
   > Given 141 pretrained donor models and a frozen 119.6M-parameter attention-SSM hybrid whose dimensions match no donor, the workers had to initialize the target without training data or gradient updates. They published 1,703 contributions and reduced the development evaluator score from 3.39 to 1.899 bits per byte, closing 62% of the gap to a trained GPT-2 124M. The best method compresses donor next-token statistics into the target's…

75. **[TuiML: Machine Learning for AI Agents](https://arxiv.org/abs/2609.17984)** · 2026-09 · relevance 8.5 · retrieval memory · tool · coding
   TuiML is a machine-learning library designed specifically for AI agents, enabling autonomous learning, experimentation, and workflow composition.
   > Benchmarks show TuiML remains predictively competitive with scikit-learn and Weka.

76. **[Collaborative Memory for Multi-Agent VLM Systems](https://arxiv.org/abs/2609.17921)** · 2026-09 · relevance 8.5 · tiered memory · method · multi-agent
   The paper proposes a framework for shared visual memory in multi-agent VLM systems to enable collaboration through distributed perception and reasoning.
   > The proposed framework provides a foundation for building reliable and resource-efficient agent teams.

77. **[HarnessVLN: Unifying Training-Free Embodied Navigation through an Agent Harness](https://arxiv.org/abs/2609.15195)** · 2026-09 · relevance 8.5 · graph memory · method · robotics
   HarnessVLN enables training-free embodied navigation by unifying instruction-following and object-goal navigation through a shared Agent Harness.
   > Across R2R, RxR, HM3D-v2, and HM3D-OVON, HarnessVLN achieves success rates of 60.8%, 53.9%, 76.0%, and 59.3%, respectively, outperforming prior training-free state-of-the-art methods.
   Benchmarks: R2R, RxR, HM3D-v2, HM3D-OVON

78. **[Semantic-TVM: Structure-Preserving Trustworthy Virtual Memory for Memory-Augmented and Tool-Using Agents](https://arxiv.org/abs/2609.15011)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   Semantic-TVM protects sensitive memory values while preserving task-relevant context for memory-augmented and tool-using agents.
   > On Memory-EHR and Memory-RAP across two providers, span-level projection recovers most of the EHR utility lost under whole-field replacement (Task Success 84.17% vs. 52.33% on DeepSeek) while measured exposure stays low and workflows remain executable.
   Benchmarks: Memory-EHR, Memory-RAP

79. **[Retrieval-Driven Memory Reconsolidation for Long-Term LLM Agents](https://arxiv.org/abs/2609.16053)** · 2026-09 · relevance 8.5 · graph memory · method · assistants
   REALM uses retrieval-driven memory reconsolidation to evolve long-term memory in LLM agents continuously.
   Benchmarks: LoCoMo, LongMemEval

80. **[LIMBO: Lifelong Inference-Time Memory and Budget Optimization for LLM Agents](https://arxiv.org/abs/2609.14138)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   LIMBO learns to allocate memory and inference budget online for LLM agents without retraining, improving cost-accuracy tradeoffs and reducing inference cost significantly.
   > Across three LLM backbones on LifelongAgentBench, LIMBO achieves better cost-accuracy tradeoffs than state-of-the-art memory-augmented baselines and nearly matches all strongest such baselines at up to ~83% lower inference cost (~53% on average).
   Benchmarks: LifelongAgentBench
