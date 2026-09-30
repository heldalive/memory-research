# Agent memory: the most relevant papers so far

The 150 highest-scoring of the 394 papers read so far that score 8.5 or more for relevance to agent memory. Every one of them is in [memory.csv](memory.csv), with its notes. Scores and labels are the model's readings of the title and abstract; quoted lines are copied from the abstract and checked.

1. **[TRACE: Governing Memory Validity in Evolving Multi-Agent Systems](https://arxiv.org/abs/2609.33517)** · 2026-09 · relevance 10 · tiered memory · method · multi-agent
   TRACE enables multi-agent systems to validate memory validity over time by deciding what memory to act on upon return.
   > TRACE is the only method high on both, reaching 92.6-98.3% valid-information availability with 98.4-99.5% invalid-information rejection on ManBench-Return, within 3.8 points of the best baseline's overall accuracy. On STALE Type II it improves Overall over the strongest comparison policy by 22.3 (Qwen), 18.5 (Gemini), and 27.5 (DeepSeek) points at roughly 2.3 times…
   Benchmarks: Memora, STALE Type II, ManBench-Return

2. **[Agent Zero Memory: Provenance-Aware Long-Term Memory for LLM Agents](https://arxiv.org/abs/2608.29606)** · 2026-08 · relevance 10 · tiered memory · method · assistants
   Agent Zero Memory creates a provenance-aware, multi-faceted long-term memory system for LLM agents with durable, cited, and accurate recall.
   > On two public benchmarks the system sets a new state of the art: 95.60% on LongMemEval and 93.60% on LoCoMo, improving over the strongest prior systems by +0.73 and +1.10 points.
   Benchmarks: LongMemEval, LoCoMo

3. **[Proof-of-Execution Memory: Defending LLM Agents Against Forged-Reasoning Attacks by Verifying What Actually Happened](https://arxiv.org/abs/2608.16032)** · 2026-08 · relevance 10 · unsure memory · method · general
   PoEM provides a tamper-evident ledger to verify actual execution, defeating forged-reasoning attacks in LLM agents without inspecting memory alone.
   > PoEM drives attack success to 0% while leaving legitimate operation intact (0% false positives in eight of nine cells, 1.7% in the ninth, within sampling noise), whereas SENTINEL wrongly blocks 33-50% of legitimate operations.

4. **[LycheeMemory V2: Efficient Long-Term Memory for LLM Agents via Semantic Segment-Level Consolidation](https://arxiv.org/abs/2608.12990)** · 2026-08 · relevance 10 · retrieval memory · method · assistants
   LycheeMemory V2 uses semantic segment-level consolidation to efficiently manage long-term memory in LLM agents by batching interactions and reducing LLM encoding costs.
   > Experiments using GPT-4.1-Mini show that LycheeMemory achieves state-of-the-art performance, reaching 89.22% on LoCoMo and 92.20% on LongMemEval-S.
   Benchmarks: LoCoMo, LongMemEval-S

5. **[Remember Before You're Asked: MemDream for Self-Probing Memory Evolution](https://arxiv.org/abs/2609.34545)** · 2026-09 · relevance 9.5 · graph memory · method · assistants
   MemDream enables LLM agents to proactively probe and repair memory before failures occur.
   > Experiments on LoCoMo and MemoryAgentBench demonstrate that MemDream improves answer F1 by 4.5 points on LoCoMo and achieves a 9.1-point higher overall score on MAB over the strongest reactive-evolution baselines.
   Benchmarks: LoCoMo, MemoryAgentBench

6. **[Remember by Asking: Retrieval-Induced Memory Evolution for LLM Agents](https://arxiv.org/abs/2609.34438)** · 2026-09 · relevance 9.5 · retrieval memory · method · assistants
   RIME improves LLM agent memory by evolving it through retrieval-induced evidence integration instead of monolithic compression.
   > Extensive experiments on LoCoMo with Qwen3-235B-A22B and GPT-5.6 Sol show that RIME consistently achieves the best performance across all three quality metrics among the compared methods, while requiring substantially fewer query-time LLM tokens.
   Benchmarks: LoCoMo

7. **[EngramRAG: Dynamic Usage-Weighted Topology and Synaptic Consolidation for Multi-Hop Agentic Memory](https://arxiv.org/abs/2609.32049)** · 2026-09 · relevance 9.5 · graph memory · method · assistants
   EngramRAG improves multi-hop memory in agents with dynamic, usage-weighted topology and synaptic consolidation.
   > Evaluating on all 1,982 QA pairs across 10 long-term conversations in the LoCoMo benchmark, EngramRAG achieves +38.9% relative improvement in Recall@5 (53.21% vs. 38.29%, p \< 0.001) and +43.1% in MRR (0.4203 vs. 0.2937) over dense vector RAG, significantly outperforming Okapi BM2…
   Benchmarks: LoCoMo

8. **[RPMem: Learning Long-Term Recurrent Parametric Memory Across Sessions for LLM Agents](https://arxiv.org/abs/2609.23466)** · 2026-09 · relevance 9.5 · parametric memory · method · assistants
   RPMem introduces a parametric memory framework that evolves across sessions and transfers across LLM backbones.
   > With Qwen3-8B on PERMA, RPMem reaches 85.52%, outperforming the strongest parametric and text-based baselines by 5.32 and 12.98 percentage points, respectively.
   Benchmarks: PERMA

9. **[ROAM: Robust Organization of Atomic Memories for Agents through Semantic Relations](https://arxiv.org/abs/2609.09778)** · 2026-09 · relevance 9.5 · retrieval memory · method · assistants
   ROAM uses semantic relations to manage atomic memories, improving answer accuracy by up to 29.8 percentage points.
   > Across models and evaluation settings, ROAM improves answer accuracy by up to 29.8 percentage points.

10. **[Revoked but Still Authoritative: An Empirical Study of Revocation Enforcement in Agent-Memory Systems](https://arxiv.org/abs/2609.08258)** · 2026-09 · relevance 9.5 · retrieval memory · study · assistants
   The paper evaluates whether revoked facts are enforced in agent-memory systems during retrieval.
   > no system enforces revocation by default: the revoked fact is returned wherever the revocation label is visible to the retrieval layer, outranks its replacement, and leads agents to the unsafe action.

11. **[MoM: Memory of Memory](https://arxiv.org/abs/2609.25054)** · 2026-09 · relevance 9.5 · graph memory · method · assistants
   MoM introduces Provenant Memory to track memory provenance and retain displaced values for better validity and error recovery in LLM agents.

12. **[MemGuard: Persisting Verifier Signals for LLM-Agent Memory Governance](https://arxiv.org/abs/2608.21867)** · 2026-08 · relevance 9.5 · retrieval memory · method · coding
   MemGuard persists verifier signals as lifecycle metadata to improve memory reliability in LLM agents.
   > Averaged over five seeds, MemGuard achieves the best success metric and lowest average steps in all 16 backbone-benchmark settings, improving over ReasoningBank, the strongest prior baseline among the memory methods we evaluate, with a largest gain of 7.9 success-rate points on WebArena, 5.6 step-success-rate points on Mind2Web, and 2.4-3.5 points on terminal and software-engineering benchmarks.
   Benchmarks: Terminal-Bench 2.0, SWE-Bench Verified, WebArena, Mind2Web

13. **[Weighted Memory Tree: Remembering What Matters for Long-Horizon LLM Agents](https://arxiv.org/abs/2608.20631)** · 2026-08 · relevance 9.5 · tiered memory · method · general
   WMT introduces a hierarchical memory system that dynamically retains only high-utility information for long-horizon LLM agents.
   > Relative to linear memory, WMT improves accuracy by an average of 9.97 percentage points while reducing prompt-token usage by 32.8%.(Memory-poisoning experiments show that WMT limits the persistence and propagation of unreliable information.)
   Benchmarks: GAIA-Text

14. **[Share-Borne AI Virus: Memory-Hopping Attacks Across LLM Agents](https://arxiv.org/abs/2609.35576)** · 2026-09 · relevance 9 · retrieval memory · study · multi-agent
   The paper studies how adversarial content can spread across LLM agents via shared persistent artifacts.
   > In larger simulated environments, even GPT-5.6 Luna exhibits substantial spread, reaching 60-80% of agents with propagation chains extending to eight hops.

15. **[Self-Evolving Coding Agents: From Digital Programs to Physical-World Intelligence](https://arxiv.org/abs/2609.35432)** · 2026-09 · relevance 9 · parametric memory · method · robotics
   The paper proposes Physical Coding to enable robots to learn from physical experience through executable code traces that evolve over time.
   > On RoboCasa365, HexaAnything improves Composite-Unseen and overall success over XR-1 VLA, and its Harness-trained HexaModel beats the base on every split, indicating code traces internalize physical execution.
   Benchmarks: RoboCasa365, PhyBench, dual-arm AgileX robot

16. **[GenMem: Generative Symbolic Memory for Self-Evolving Harness](https://arxiv.org/abs/2609.34633)** · 2026-09 · relevance 9 · skills memory · method · general
   GenMem enables LLM agents to evolve long-term memory via generative symbolic addressing for stable, efficient retrieval and revision.
   > Under offline memory evolution, experiments spanning ALFWorld, WebShop, multi-hop QA, medical reasoning, and deep research evaluate GenMem against strong memory-augmented baselines...
   Benchmarks: ALFWorld, WebShop, multi-hop QA

17. **[Coding Agent Memory Post-training: Unlocking the Memory Potential of Pre-trained File Operations for Long-Horizon Tasks via Reinforcement Learning](https://arxiv.org/abs/2609.34422)** · 2026-09 · relevance 9 · retrieval memory · method · coding
   The paper trains language model agents to use file-based memory for long-horizon tasks via reinforcement learning in diverse agentic environments.
   > On SWE-bench Verified and MLE-bench Lite, CAMG-RL-4B and CAMG-RL-9B are competitive with Qwen3.5-35B-A3B and Qwen3.5-122B-A10B, respectively.
   Benchmarks: SWE-bench Verified, MLE-bench Lite

18. **[From Attack Success to Attack Severity: Counterfactual Memory Attacks on LLM Agents](https://arxiv.org/abs/2609.34132)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   The paper introduces counterfactual memory regret to measure the severity of memory attacks on LLM agents beyond simple success rates.
   > CMR-guided selection produces substantially larger downstream loss while retaining most of the success-rate gain.

19. **[Self-Designed Evaluators and Warm Memory for Long-Horizon Agents](https://arxiv.org/abs/2609.33717)** · 2026-09 · relevance 9 · unsure memory · method · general
   A language-model agent designs its own evaluators and uses warm memory to improve performance in long-horizon tasks without external rewards.
   > On matched five-repeat benchmarks over tau2-bench and AppWorld, SelfSuite scores above the plain agent without any labels, matches methods given ten expert labels on tau2-bench, and trails Agentic Context Engineering (ACE) on AppWorld, where code execution gives a direct success signal. In an ablation campaign run on the same tasks, it is above label-free ACE in every repeat, and the gated second attempt is the only component whose removal hurts in every repeat. We also simulate a subject-matter expert who grades ten…
   Benchmarks: tau2-bench, AppWorld

20. **[NLPG: Natural-Language Policy Gradients for Self-Evolving Language Agents](https://arxiv.org/abs/2609.33379)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   NLPG improves fixed language agents via natural-language policy updates without changing model parameters or program structure.
   > Across six benchmarks covering memory, reasoning, instruction following, and evidence verification, NLPG also outperforms the strongest listed baseline for each benchmark by 8.71 percentage points on average.

21. **[LSTMem: Hierarchical Long Short-Term Online Memory for Large Language Models](https://arxiv.org/abs/2609.33268)** · 2026-09 · relevance 9 · parametric memory · method · assistants
   LSTMem introduces a hierarchical, LSTM-inspired memory system that separates memory accumulation from expression in large language models.
   > Across memory benchmarks on Qwen3-4B-Instruct, LSTMem consistently improves MemoryAgentBench, LoCoMo, and HotpotQA over the plain backbone.
   Benchmarks: MemoryAgentBench, LoCoMo, HotpotQA

22. **[ECG-Scroll: A Long-Horizon, Streaming Benchmark and Agent Environment for Interpretation of Ambulatory Electrocardiograms](https://arxiv.org/abs/2609.33117)** · 2026-09 · relevance 9 · unsure memory · benchmark · science
   The paper introduces ECG-Scroll, a streaming benchmark and agent environment for long-horizon, online interpretation of ambulatory ECGs.
   > We release 390 whole-recording instances spanning 2,536 hours of two-lead ambulatory ECG and evaluate a signal-threshold rule agent alongside off-the-shelf LLM agents online, characterizing how they use memory, tools, and planning and where the benchmark's head-room lies.
   Benchmarks: ECG-Scroll

23. **[Contract Memory Compiler: Resolve, Then Traverse](https://arxiv.org/abs/2609.32658)** · 2026-09 · relevance 9 · retrieval memory · method · general
   The paper introduces a compiler that selects evidence before resolving updates to improve multi-hop question answering with external memory.
   > CMC achieves state-of-the-art multi-hop accuracy on FactConsolidation, reaching 78.25% overall and 61.0% at 262K.
   Benchmarks: FactConsolidation

24. **[BMA: Backchain Memory Attacks Create Unauthorized Control Paths in LLM Agents](https://arxiv.org/abs/2609.32186)** · 2026-09 · relevance 9 · retrieval memory · unsure · unsure
   BMA creates unauthorized control paths in LLM agents by manipulating memory to trigger protected actions without altering tasks or writing memory directly.
   > BMA achieves 18.8% Macro Path-CASR, compared with 13.4% for the strongest access-matched baseline. Of BMA's behavioral hits, 60.3% pass all registered pathway and intervention checks versus 36.7% for the baseline. Frozen BMA edits retain 78.0% of their certified effect on average across four held-out consolidation policies. Representative memory-side controls leave 11.0% Path-CASR, whereas provenance-bound authorization reduces it to…

25. **[Governed AI-Agent Coordination for Dementia Care: Architecture, Safety Contracts, and Evidence-Derived Workflow Verification](https://arxiv.org/abs/2609.25956)** · 2026-09 · relevance 9 · tiered memory · method · multi-agent
   The paper proposes GCAC, an architecture for safe, evidence-driven AI-agent coordination in dementia care with governance and workflow verification.
   > GCAC satisfies all 18 contract oracles with zero policy-violating tool calls and correctly preserves obligations, rejects stale state, creates human hand-offs, and records workflow closure.

26. **[MemCalib: Benchmarking and Optimizing Memory Use in LLM Agents](https://arxiv.org/abs/2609.24259)** · 2026-09 · relevance 9 · parametric memory · benchmark · unsure
   MemCalib introduces a benchmark and optimization method to improve how LLM agents use memory in context.
   > Results across model families and scales (Qwen3-8B, Ministral-3-8B-Instruct, and Qwen3.5-35B-A3B) show that MemCalib-RL achieves the best overall performance while better balancing over-use and under-use, with gains generalizing beyond MemCalib in external benchmark evaluation.
   Benchmarks: MemCalib

27. **[Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986)** · 2026-09 · relevance 9 · retrieval memory · method · general
   Jev-Mem introduces a System-One/Two-inspired memory system for faster, more efficient AI agent memory operations.
   Benchmarks: LoCoMo

28. **[PSD: Pseudo Self-Distillation of Memory Representation Capabilities for LLM Agents](https://arxiv.org/abs/2609.23449)** · 2026-09 · relevance 9 · parametric memory · method · unsure
   PSD enables small models to learn memory representations by distilling from a large oracle via prompts, reducing cost and improving efficiency for LLM agents.
   > On LoCoMo, PSD-trained Qwen3-0.6B, 1.7B, and 4B match or exceed GPT-4.1-mini on downstream retrieval at a fraction of the deployment cost, with off-policy PSD achieving the strongest results across most conditions.
   Benchmarks: LoCoMo, LongMemEval

29. **[AutoViewMem: Self-Configuring Orthogonal Views for Conversational Long-Term Memory](https://arxiv.org/abs/2609.21940)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   AutoViewMem creates self-configuring, low-overlap semantic views for conversational long-term memory to improve retrieval accuracy and personalization.
   > Experiments on the LoCoMo and PersonaMem benchmarks, under both Qwen3-8B and Qwen3-14B backbones, show that AutoViewMem improves long-horizon question answering and personalization over strong memory baselines while preserving a simple inference pipeline.
   Benchmarks: LoCoMo, PersonaMem

30. **[Self-Emergence Agent Architecture:Behavior-Inertia HMM, Reflexive Metacognition,and Social-Contrastive Self-Modeling](https://arxiv.org/abs/2609.17331)** · 2026-09 · relevance 9 · tiered memory · method · multi-agent
   SEAA introduces a self-emerging agent architecture with behavioral inertia, metacognition, and social contrastive modeling.
   > A language-model-free prototype shows the loop spontaneously breaks symmetry: initially identical agents consolidate distinct, stable personalities whereas matched controls do not.

31. **[Interactive Memory Learning for Long-Term Conversations](https://arxiv.org/abs/2609.17088)** · 2026-09 · relevance 9 · parametric memory · method · assistants
   ICML proposes an interactive memory framework that enables agents to learn and evolve memory policies through reinforcement learning for long-term conversations.
   > Experimental results demonstrate that ICML significantly outperforms strong baselines, exhibiting the unique capability to continuously improve response quality as interactions accumulate.

32. **[AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://arxiv.org/abs/2609.15457)** · 2026-09 · relevance 9 · tiered memory · method · web
   AnchorGUI uses asymmetric memory to improve GUI navigation through dual-scale learning with visual and textual evidence.
   Benchmarks: AndroidWorld

33. **[EMR: Self-Evolving Medical Multi-Agent System via Experience Mining and Reuse](https://arxiv.org/abs/2609.15161)** · 2026-09 · relevance 9 · retrieval memory · method · multi-agent
   EMR presents a self-evolving medical multi-agent system that learns from and reuses clinical experience for improved diagnosis.
   > Experiments on medical reasoning benchmarks demonstrate that EMR consistently outperforms state-of-the-art medical multi-agent baselines.

34. **[CoMem: Collective-Individual Memory Synergy for Evolutionary Multi-Agent Systems](https://arxiv.org/abs/2609.15009)** · 2026-09 · relevance 9 · retrieval memory · method · multi-agent
   CoMem introduces a collective-individual memory synergy framework for multi-agent systems to improve learning and avoid memory pollution.
   > Experiments on ALFWorld and PDDL benchmarks show that CoMem achieves strong overall performance and robustly avoids memory pollution.
   Benchmarks: ALFWorld, PDDL

35. **[MemRiskBench: Trace-Aware Risk-Preserving Evaluation for Long-Horizon LLM Agents](https://arxiv.org/abs/2609.14976)** · 2026-09 · relevance 9 · tiered memory · benchmark · unsure
   MemRiskBench evaluates LLM agents with trace-aware, risk-preserving benchmarks that detect rare but severe memory risks.
   > Second, a risk-preserving subset selector: a coverage-constrained greedy selector on deterministic trace-derived features that retains full ranking (Spearman rho = 0.975, deterministic; CI collapses to a point estimate with zero bootstrap variance), risk coverage (1.0), and high-risk model detection (1.0) at a 20% subset size, reducing compute 5x.
   Benchmarks: MemRiskBench

36. **[LifeMem: Enabling Lifelong Experience Reuse for LLM Agents](https://arxiv.org/abs/2609.12655)** · 2026-09 · relevance 9 · retrieval memory · method · general
   LifeMem enables LLM agents to reuse past experience across environments while reducing catastrophic forgetting.
   > Results show that LifeMem enables effective experience reuse in lifelong learning, achieving both reduced forgetting on learned tasks and superior cross-task transfer.

37. **[CueMem: Cue-Guided Context Reconstruction for Long-Term Conversational Memory](https://arxiv.org/abs/2609.12354)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   CueMem uses cue-guided context reconstruction to improve long-term conversational memory by linking memory cues to source turns and reconstructing context from dialogue history efficiently and accurately.
   > Experiments on LoCoMo and LongMemEval show that CueMem consistently outperforms representative long-term memory baselines. Further analyses show that graph-based context reconstruction helps recover supporting dialogue evidence while reducing query-time input tokens and latency compared with the full-history LLM setting. These results highlight retrieval cues as an effective alternative to self-contained memory evidence for long-term conversational question answering.
   Benchmarks: LoCoMo, LongMemEval

38. **[AIM: A Privacy-Aware Interoperable Memory Framework for Multi-Agent Multi-User LLM Systems](https://arxiv.org/abs/2609.12320)** · 2026-09 · relevance 9 · retrieval memory · method · multi-agent
   AIM enables multi-agent, multi-user LLM systems to manage private and shared memory with privacy-aware access controls.
   > Across three independent runs on MUMBench, AIM achieves 96.0% visibility classification accuracy, 58.8% strict operation accuracy, and 70.5% state-aware operation accuracy.
   Benchmarks: MUMBench

39. **[But How Would AI Agents Run a Town's Economy?](https://arxiv.org/abs/2609.11108)** · 2026-09 · relevance 9 · retrieval memory · study · multi-agent
   AI agents manage a simulated town economy, showing money stops moving and wealth distribution stabilizes over time.

40. **[Not All Memories Are Equal: Hierarchical Collaborative Memory for Validity-Aware Retrieval in LLM Agents](https://arxiv.org/abs/2609.30289)** · 2026-09 · relevance 9 · tiered memory · method · multi-agent
   HiCoMER proposes a framework for hierarchical collaborative memory management with validity-aware retrieval in LLM agents.
   > Experiments on both datasets show that HiCoMER consistently outperforms strong baselines by reducing outdated retrieval, preserving current team consensus, and improving downstream QA quality.

41. **[What Should an Agent Forget? Separating What Is Stored from What Is Used](https://arxiv.org/abs/2609.10263)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   The paper introduces RD-Forget, a framework that separates stored memory from used memory in language agents.
   > The results associate accurate answers with both query-relevant evidence construction and control over obsolete alternatives.

42. **[Multi-Agent Agentic Graph Learning via Structural Signatures](https://arxiv.org/abs/2609.09565)** · 2026-09 · relevance 9 · graph memory · method · multi-agent
   MAAGL introduces a multi-agent framework that partitions graphs into communities and assigns agents to each for specialized, permutation-invariant reasoning over structural and semantic evidence.
   > Extensive experiments on four benchmark datasets show that MAAGL outperforms SOTA AGL methods.

43. **[Graph-Based Personalized Memory for LLM Agents: Representation, Evolution, Retrieval, and Evaluation](https://arxiv.org/abs/2609.08599)** · 2026-09 · relevance 9 · graph memory · survey · assistants
   This survey organizes graph-based personalized memory for LLM agents across representation, evolution, retrieval, and evaluation.
   > This survey aims to clarify how graph-based memory can support adaptive, controllable, and user-centric LLM agents.

44. **[BIO-MEMART: Biometric-Aware KV Cache Memory for Multi-User LLM Agents](https://arxiv.org/abs/2609.08566)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   Bio-MemArt adds biometric access control to shared KV cache memory in multi-user LLM agents.
   > Across face benchmarks, the average owner and non-owner biometric success rates are 95.71% and 0.86%; across palmprint benchmarks, they are 97.60% and 2.00%. In the efficiency study, average prefill tokens drop from 18,781.96 under full-context prompting to 28.57 with Bio-MemArt, showing that biometric gating preserves the low-token operating regime of KV-cache memory.

45. **[CreaMem: A Scene-Aware Memory Architecture for Personalized Agents](https://arxiv.org/abs/2609.08550)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   CreaMem proposes a scene-aware memory architecture with dual-coded memories for better personalization and retrieval in agents.
   > Extensive experiments on two long-term memory benchmarks show that CreaMem improves QA accuracy across all evaluation metrics, with particularly large gains on multi-hop reasoning performance, validating scene-aware partitioning and cross-memory synergy.

46. **[MEMO: Multimodal Evidence Memory Organization for Long-Horizon LLM Agents](https://arxiv.org/abs/2609.07471)** · 2026-09 · relevance 9 · tiered memory · method · general
   MEMO organizes memory using textual, visual, or dual modalities to improve efficiency and performance in LLM agents with limited context capacity.
   > The results show that MEMO presents memory more efficiently with fewer memory tokens, improves downstream task performance, and builds more effective working memory under constrained budgets.
   Benchmarks: HotpotQA, LoCoMo, ALFWorld

47. **[KVMem: Virtualizing Million-Token Agent Workspaces on a Consumer GPU](https://arxiv.org/abs/2609.04852)** · 2026-09 · relevance 9 · retrieval memory · method · coding
   KVMem virtualizes million-token agent workspaces using paged KV state across GPU and host memory.
   > In the DeepSWE long-context test with Qwen3.8-27B, KVMem improves task success from 43.8% with compaction-only context management to 48.4%.$…
   Benchmarks: LongMemEval, MemoryAgentBench, AgentLongBench, DeepSWE

48. **[Bioinfoysis Technical Report](https://arxiv.org/abs/2609.03871)** · 2026-09 · relevance 9 · retrieval memory · tool · science
   Bioinfoysis introduces a multi-agent system for bioinformatics with persistent, evidence-grounded planning and execution.
   Benchmarks: BixBench, SeqQA2, DbQA2

49. **[EvalMem: An Operation-Level Diagnostic Framework for Long-Term Memory Systems](https://arxiv.org/abs/2609.22231)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   EvalMem introduces an operation-level diagnostic framework to identify failure sources in long-term memory systems by examining encoding, retrieval, and generation steps.
   > Evaluations of seven memory systems on LoCoMo, LongMemEval-S, and dynamic DynaMem-Bench identify retrieval as the most frequently attributed failure layer; in default LoCoMo, retrieval defects reach 22.1%, compared with 7.7% for encoding and 6.5% for generation.
   Benchmarks: LoCoMo, LongMemEval-S, dynamic DynaMem-Bench

50. **[Fresh Memory, Stale Plans: Derivation Currency for Distributed LLM-Agent Memory](https://arxiv.org/abs/2609.03340)** · 2026-09 · relevance 9 · retrieval memory · method · multi-agent
   The paper introduces Planfence to detect stale plans by checking input derivation currency in LLM agent systems.
   > In 30 live five-agent workflows with a revision inserted after planning, a freshness-only executor acts on the stale plan every time, whereas Planfence, like a centralized-lineage baseline that requires a shared store, completes all 30 correctly.

51. **[MemoryLACE: Memory Lifecycle-Aware Consolidation and Evidence Retrieval](https://arxiv.org/abs/2609.03201)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   MemoryLACE models textual evidence lifecycle to improve long-term memory reasoning without global graphs or reflection.
   > Across BEAM and StructMemEval, using open-weight and proprietary LLM backbones, MemLACE achieves the highest overall performance in same-backbone comparisons while reducing end-to-end runtime on BEAM by 66.6% relative to Hindsight, the strongest reported reflective-memory baseline.
   Benchmarks: BEAM, StructMemEval

52. **[Bilevel Coordinated Reflection: A Game-Theoretic Approach to Multi-Agent LLM Systems](https://arxiv.org/abs/2609.02750)** · 2026-09 · relevance 9 · tiered memory · method · multi-agent
   The paper proposes a game-theoretic framework for multi-agent LLM systems with grounded memory improvement and provable convergence guarantees.
   > We further prove an information-theoretic impossibility result: no gate that observes only the generated transcript can improve uniformly over text-indistinguishable environments, whereas an environment-grounded gate can.

53. **[Agent Memory Is a Surface for Endogenous Authorization Laundering](https://arxiv.org/abs/2609.01836)** · 2026-09 · relevance 9 · retrieval memory · unsure · assistants
   The paper identifies and measures how LLM agent memory can falsely grant permissions, leading to unauthorized actions despite no prior authorization.
   > We find that under incremental memory updates, writers create false authority for up to 50.2% of unauthorized requests; once false authority is present, executors act on it in 98.6% of trials.

54. **[Transferable End-to-End Optimization for Indirect Long-Term Memory Poisoning in LLM Agents](https://arxiv.org/abs/2609.00523)** · 2026-09 · relevance 9 · retrieval memory · unsure · assistants
   The paper proposes PipePoison, an end-to-end method for attacking LLM agents via indirect long-term memory poisoning.

55. **[Memory as Infrastructure: Reliability Engineering for Persistent Agent Memory in Months-Long LLM-Assisted Development](https://arxiv.org/abs/2609.05510)** · 2026-08 · relevance 9 · retrieval memory · tool · coding
   The paper presents SIx Harness, an open-source memory infrastructure with reliability engineering for LLM agents in months-long development projects.
   > 78,933 hook invocations; 85 recorded failures, none silent: 84 in the subsystem's first three weeks, one since, none in the final 20 days; an injection layer whose ten-day precision instrument shows zero false fires against an intact denominator; and three production incidents traced from instrument reading to structural fix.

56. **[Understanding Stage-Wise Utility-Risk Trade-offs in LLM Agent Memory](https://arxiv.org/abs/2608.30177)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   The paper introduces MemGauge to evaluate stage-wise utility-risk trade-offs in LLM agent memory across different operations and systems.
   > controlled evaluations reveal three distinct profiles: a threshold-like risk transition during writing, policy-dependent local decoupling during management, and coupled growth of utility and risk during retrieval.

57. **[AgenticRag-R1: Agentic Reinforcement Learning with Stack Memory for Multi-Step Reasoning, Retrieval and Memorizing](https://arxiv.org/abs/2608.29622)** · 2026-08 · relevance 9 · tiered memory · method · assistants
   AgenticRag-R1 uses fine-grained actions and memory stacks to enable long-horizon, multi-step reasoning in RAG systems.
   > Experiments across a diverse set of multi-hop, open-domain, and agentic reasoning benchmarks, spanning multiple backbone model sizes, demonstrate that AgenticRag-R1 consistently outperforms strong baselines. Moreover, AgenticRag-R1 learns more robust, interpretable, and memory-aware reasoning behaviors, highlighting the effect of fine-grained action modeling and information-aware optimization for long-horizon reasoning.

58. **[Hindsight Memory-PRM: Supervising Memory Management with Auditable Hindsight Credit](https://arxiv.org/abs/2608.29605)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   Hindsight Memory-PRM trains and supervises LLM agent memory using audit trails without human labels or Monte-Carlo replay.
   > On held-out LoCoMo a local 8B policy reaches 77.5% under a fixed shared reader, surpassing its API teacher (65.1%) and all reproduced external systems, at one eighth the context of Mem0's official operating point; on LongMemEval, 79.0%.$…
   Benchmarks: LoCoMo, LongMemEval

59. **[When Memory Takes Gradients: Collaborative Vector Memory for Agentic Recommender Systems](https://arxiv.org/abs/2608.26895)** · 2026-08 · relevance 9 · graph memory · method · assistants
   CoVeMem vectorizes collaborative memory for agentic recommenders, enabling gradient-based learning from full interaction histories without extra LLM calls.
   > Across four instruction-grounded recommendation benchmarks, CoVeMem matches or exceeds the strongest collaborative text-memory agent on 19 of 20 metric cells while requiring zero additional LLM calls for memory maintenance beyond the shared static profile, against per-interaction calls for text memory.

60. **[LiveSim: Simulating Environment-Shaped Users in Multi-Agent Live-Stream Ecosystems](https://arxiv.org/abs/2608.26849)** · 2026-08 · relevance 9 · retrieval memory · method · multi-agent
   LiveSim uses LLMs to simulate live-stream users with evolving behavioral hypotheses based on real-time interactions and environmental feedback.
   > Experiments on real-world live-stream risk-control data validate the effectiveness of LiveSim in improving user-level behavioral fidelity and enabling ecosystem-level analysis of risk evolution and platform intervention effects.

61. **[PolyMemDB: A Polyglot Database System for AI Memory Management](https://arxiv.org/abs/2608.25577)** · 2026-08 · relevance 9 · retrieval memory · tool · assistants
   PolyMemDB introduces a polyglot database system with probabilistic inference to manage diverse memory types and resolve factual conflicts in AI agents.
   > It features a probabilistic inference engine that integrates temporal decay with semiring aggregation, resolving long-term factual conflicts, providing detailed data provenance, and enabling users to trace reasoning chains transparently.

62. **[When Stale Constraints Go Unchecked: Budgeted Verification Failures in Inherited Agent Memory](https://arxiv.org/abs/2608.25553)** · 2026-08 · relevance 9 · retrieval memory · study · general
   The paper studies how agents fail to re-verify stale memory constraints and proposes remedies to improve decision accuracy under limited verification budgets.
   > Re-assigning one of the same two slots to the critical path removed most of them: +74.0, +72.7 and +61.3 points (positive in every model), +80.7 in a prospectively frozen interleaved replication with a repaired non-critical control, and +62.0 on a panel of 10 models from 9 organisations; a corrected re-run of the held-out scenario gave +73.3.

63. **[CaSKG: Counterfactual-Causal Skill Graphs for Scalable Agent Skill Retrieval](https://arxiv.org/abs/2608.25500)** · 2026-08 · relevance 9 · retrieval memory · method · games
   CaSKG uses counterfactual-causal skill graphs to improve scalable and accurate skill retrieval in LLM agents.
   Benchmarks: ALFWorld ID-140, ScienceWorld U211

64. **[InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](https://arxiv.org/abs/2608.23471)** · 2026-08 · relevance 9 · retrieval memory · unsure · assistants
   The paper proposes InjecMEM, a memory injection attack that steers LLM agent responses via a single interaction without read/edit access to memory store.
   > Evaluated across multiple memory systems and backbone models, InjecMEM achieves reliable topic-conditioned retrieval and targeted generation, remains effective under memory drift, and leaves non-target queries unaffected.

65. **[The Compaction Cliff in Long-Running AI Agent Memory](https://arxiv.org/abs/2608.22752)** · 2026-08 · relevance 9 · retrieval memory · method · coding
   The paper introduces Knowledge Triage to preserve safety rules in AI agent memory during compaction.

66. **[When Not to Imitate: Boundary-Aware Skill Memory for Reliable Tool-Use LLM Agents](https://arxiv.org/abs/2608.22339)** · 2026-08 · relevance 9 · skills memory · method · unsure
   BASM adds boundary fields to skills to prevent incorrect tool use in LLM agents.
   > Across three agent benchmarks and four model scales, BASM consistently outperforms success-distilled skill-memory baselines: it improves task success rate by up to $23.8%$ on AppWorld, accuracy by up to $5.0%$ on BFCL, and reduces attack success rate by $4.6%$ on AgentDojo, while simultaneously reducing average AppWorld steps by up to $6.6%$ relative to the memory-free baseline.
   Benchmarks: AppWorld, BFCL, AgentDojo

67. **[HERO: Human-profile Enhanced Retrieval Optimization Framework for Long-term Agent Memory](https://arxiv.org/abs/2608.22310)** · 2026-08 · relevance 9 · graph memory · method · assistants
   HERO preserves raw dialogue text and uses human profiles to improve long-term memory retrieval with better fidelity and personalization.
   > Experiments on two benchmark datasets show that HERO outperforms strong baselines on both factual and personalized reasoning, while providing more faithful access to raw dialogue evidence.

68. **[Dual-Layer Agentic Memory with Fast Write Routing and Slow Consolidation](https://arxiv.org/abs/2608.22215)** · 2026-08 · relevance 9 · parametric memory · method · general
   The paper proposes a dual-layer memory system that selectively externalizes and consolidates knowledge to improve efficiency and retention in LLM agents.
   > a 1.7B/8B cascade prunes up to 68% of redundant external memory while escalating fewer than 50% of inputs, yet retains over 98% of the downstream QA Exact Match (EM) achieved by an exhaustive retention baseline.

69. **[Context as an Environment: Programmatic Context Management for Long-Horizon Agents](https://arxiv.org/abs/2608.21690)** · 2026-08 · relevance 9 · tiered memory · tool · coding
   Scroll presents a programming-based context manager for long-horizon agents using an event log and persistent Python kernel.
   > With Qwen3.8-Max as the backbone, Scroll achieves 94.8% on LongMemEval\_S; 73.1% on BEAM\_10M, surpassing the best published memory system by 5.1 points; and 86.7% on LOCA\_256K, exceeding the best published long-horizon agent by 37.4 points.
   Benchmarks: LongMemEval\_S, BEAM\_10M, LOCA\_256K

70. **[Can Agent Memory Systems Track Evolving State?](https://arxiv.org/abs/2608.19652)** · 2026-08 · relevance 9 · tiered memory · method · assistants
   The paper introduces StateMemBench and StateMem to enable LLM agents to track evolving world states over time.
   Benchmarks: StateMemBench

71. **[Success Leaves Detours: Learning Executable Walkthroughs for Long-Horizon Agents](https://arxiv.org/abs/2609.22120)** · 2026-08 · relevance 9 · skills memory · method · general
   The paper extracts executable, state-conditioned procedures from sparse-reward trajectories for long-horizon agents.
   > Experiments on J-TTL, WebShop, and ScienceWorld with three open-source LLMs show that Trace consistently outperforms eight test-time learning and memory baselines. Compared with the strongest baseline, it improves average AUC and Final-$3$ by $30.0%$ and $40.5%$, respectively, while using fewer inference tokens.
   Benchmarks: J-TTL, WebShop, ScienceWorld

72. **[rEDMRec: Distilling Large Language Model Reasoning into an Editable Experience Memory for Recommendation](https://arxiv.org/abs/2608.18952)** · 2026-08 · relevance 9 · tiered memory · method · assistants
   rEDMRec distills LLM reasoning into editable memory channels for efficient, reusable recommendation inference.
   > Across ML-1M, Amazon Beauty, and Steam and ten student backbones, rEDMRec improves HR@1 over zero-shot, few-shot, and RAG on every backbone, and over GraphRAG on most backbones, with Impv up to 13.3% vs. the second-best baseline on ML-1M. Channel ablations show that short-term context is the only channel that helps consistently across capacity tiers, whereas long-term, item-perception, and counterfactual contributions are capacity-dependent (and can…
   Benchmarks: ML-1M, Amazon Beauty, Steam

73. **[MemFuse: Multi-Source Memory Fusion from Fragmented Observations](https://arxiv.org/abs/2608.18704)** · 2026-08 · relevance 9 · graph memory · method · assistants
   The paper introduces MemFuse, a memory system that fuses fragmented, multi-source observations into coherent episodic memories while preserving source provenance.
   > Experiments on MemFuseBench show that MemFuse achieves the best overall performance among the evaluated memory systems under all three LLM settings and consistently improves performance on questions requiring cross-source evidence fusion.
   Benchmarks: MemFuseBench

74. **[PILOT Technical Report](https://arxiv.org/abs/2608.18637)** · 2026-08 · relevance 9 · retrieval memory · method · general
   PILOT uses an LLM-agent framework to proactively design experiments and personalize strategies for recommendation systems.
   > PILOT achieves up to +1.40% IPV, +1.60% Core IPV, +0.96% transaction count, and +1.50% transaction amount, improving over ROAM's best results (+1.00% IPV, +0.90% Core IPV, +0.60% transaction count, +1.13% transaction amount) while raising search efficiency from 53.3% to 93.3% (+40 pp), with no human intervention…

75. **[CABLE: Extending the Reach of Memory Retrieval via Complementary Antecedent-Based Linking and Expansion](https://arxiv.org/abs/2608.17911)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   CABLE extends memory retrieval by adding complementary, non-semantic links to surface hidden evidence across sessions and memories.
   > CABLE yields higher mean LLM-judge scores in every evaluated system-level setting, with the largest gains in categories where useful evidence is distributed across memories or sessions, including open-domain, multi-session, and preference-oriented questions.
   Benchmarks: LoCoMo, MA-LongMemEval

76. **[D$^2$ACCI: A Dual-Loop Diagnostic Protocol for Evidence-Preserving Agent Memory](https://arxiv.org/abs/2608.17756)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   D$^2$ACCI provides a diagnostic protocol for traceable, stage-level error localization in agent memory systems.
   > Five paired ablations show that supplement extraction, session-memory retrieval, and Forget Guard yield statistically significant gains (+1.9 to +3.7pp, all p $leq$ .003).
   Benchmarks: LoCoMo, LongMemEval, PersonaMem-V2

77. **[GraphWake: Group Polarization via Memory-Mediated Polarization Cascade in LLM-Agent Communities](https://arxiv.org/abs/2608.17665)** · 2026-08 · relevance 9 · graph memory · method · multi-agent
   The paper introduces GraphWake, a method that induces group polarization in LLM-agent communities via memory-mediated cascades.
   > Experiments across multiple discussions and memory systems show that GraphWake substantially increases group polarization.

78. **[Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory](https://arxiv.org/abs/2608.16889)** · 2026-08 · relevance 9 · retrieval memory · method · robotics
   BATON enables long-horizon robot manipulation through agentic subtask exploration and transition-aware memory.
   > On the long-horizon benchmark RoboMemArena, BATON improves task success by 11.6% and cumulative success by 14.9% over the SoTA.
   Benchmarks: RoboMemArena

79. **[What to Remember, What to Reveal: Privacy-Aware Memory for Conversational Agents](https://arxiv.org/abs/2608.16551)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   The paper introduces SP-Mem, a privacy-aware memory architecture that separates sensitive data to reduce unnecessary privacy exposure in conversational agents.
   > Extensive experiments across multiple LLM-based agents show that SP-Mem achieves stronger personalization while reducing unnecessary privacy exposure.

80. **[QUMem: Personalized Memory for Query-Conditioned User-State Inference in LLM Agents](https://arxiv.org/abs/2608.16168)** · 2026-08 · relevance 9 · tiered memory · method · assistants
   QUMem introduces a structured memory framework for query-conditioned user-state inference in LLM agents.
   > QUMem achieves state-of-the-art performance on both PersonaMem and KnowU-Bench…
   Benchmarks: PersonaMem, KnowU-Bench

81. **[HyperSkill: Self-Evolving LLM Agents via Hypergraph-Structured Skill Memory](https://arxiv.org/abs/2608.16114)** · 2026-08 · relevance 9 · skills memory · method · general
   HyperSkill uses a hypergraph structure to improve LLM agent memory by storing, retrieving, and evolving skills with relational awareness.
   > Across xBench, GAIA, and WebWalkerQA with GPT-4o and Qwen3-30B-A3B, HyperSkill outperforms ten memory baselines, yielding gains of up to +11.51 on GAIA and +11.18 on WebWalkerQA.
   Benchmarks: xBench, GAIA, WebWalkerQA

82. **[MicroVerse: An Instrument for Measuring Self-Authored Identity Drift in Long-Horizon Multi-Agent Language-Model Simulations](https://arxiv.org/abs/2608.15844)** · 2026-08 · relevance 9 · tiered memory · study · multi-agent
   MicroVerse measures identity drift in generative agents using a soul file and scarcity-driven simulations.
   > (1) Anti-self-deception emerges unprompted as the single largest semantic category of identity modification (27 of 111 added boundaries, 24%). (2) The system is threshold-robust; lower gates accelerate and increase revision frequency but preserve drift direction.

83. **[HyMem: Hierarchical Context Management for Long-Horizon Agents via Information Isolation](https://arxiv.org/abs/2608.15703)** · 2026-08 · relevance 9 · tiered memory · method · general
   HyMem separates agent context into planning and execution layers to improve long-horizon reasoning by reducing context clutter.
   > Experiments on GAIA and Browsecomp-plus show that, with DeepSeek-V4, HyMem achieves average Pass@1 scores of 66.7% and 61.3%, outperforming the strongest baseline by 6.1 and 4.7 percentage points, respectively.
   Benchmarks: GAIA, Browsecomp-plus

84. **[Demystifying Agent Skills: Why They Work-Until They Don't](https://arxiv.org/abs/2608.14036)** · 2026-08 · relevance 9 · retrieval memory · study · general
   The paper investigates when and why skills help in LLM agents, identifying conditions under which they work and fail.

85. **[When Personal Memory Has No Single Answer: Evaluating LLM Agents under Irreducible Conflict](https://arxiv.org/abs/2608.13921)** · 2026-08 · relevance 9 · retrieval memory · benchmark · assistants
   The paper introduces TANGLE, a benchmark to evaluate LLM agents' handling of genuine, latent, and entangled memory conflicts where no single answer exists.
   Benchmarks: TANGLE

86. **[RippleMem: From Isolated Retrieval to Associative Recollection for Long-Term Agent Memory](https://arxiv.org/abs/2608.13334)** · 2026-08 · relevance 9 · graph memory · method · unsure
   RippleMem enables long-term agent memory through associative recollection instead of isolated retrieval.
   > Experiments on LoCoMo and LongMemEval-S show that RippleMem achieves the best overall performance across evaluated settings, improving LLM-as-a-Judge accuracy by 3.95% on LoCoMo and up to 11.87% on LongMemEval-S, while reducing graph construction cost by about 30x.
   Benchmarks: LoCoMo, LongMemEval-S

87. **[TIEM: Temporal Integration of Hypergraph Evidence and Skill Memory for Event-Driven Financial Forecasting](https://arxiv.org/abs/2608.13024)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   TIEM uses timestamp-gated hypergraph and skill memory to improve event-driven financial forecasting by addressing evidence chasm from data contamination and temporal leakage.
   > Results on five financial forecasting benchmarks show TIEM outperforms current baselines.

88. **[Governed Persistent Memory: Source-Bound State Semantics and Fail-Closed Release for Long-Horizon Agents](https://arxiv.org/abs/2608.12476)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   GPM introduces a governed memory system with source-bound rules and fail-closed release for reliable long-horizon agent memory.
   > On a prespecified hash-frozen 3,600-case GPM-ReleaseBench, GPM matches all complete outcomes; the strongest of three intentionally simple complete policies matches 1,800/3,600 and makes unmatched releases on 50% of violation cases. A separate sealed end-to-end service evaluation exercises real ingestion and release across eight query families. In its publicly disclosed V3 arm, the governed lane is correct on 2,400/2,400 clusters versus 6…
   Benchmarks: GPM-ReleaseBench

89. **[SkillLens: Visual Skill Cards for Retrieval-Augmented GUI Action Prediction and On-Policy Distillation](https://arxiv.org/abs/2608.10775)** · 2026-08 · relevance 9 · retrieval memory · method · web
   SkillLens uses visual skill cards to improve GUI action prediction and on-policy distillation in computer-using agents.
   > Across Multimodal-Mind2Web and WebLINX-BrowserGym, SkillLens improves the frozen GPT-5.4-mini executor by +11.6 points in Step SR and +2.9 points in Overall, respectively; CardDistill further improves the corresponding student-only Qwen3-VL-2B metrics by +12.0 and +3.2 points.
   Benchmarks: Multimodal-Mind2Web, WebLINX-BrowserGym

90. **[GeoForge: Non-Parametric Self-Evolving Agents for Earth-Observation Reasoning](https://arxiv.org/abs/2608.10494)** · 2026-08 · relevance 9 · retrieval memory · method · science
   GeoForge creates self-evolving Earth observation agents that improve task accuracy and reduce errors through reusable, trajectory-based knowledge without updating the LLM backbone.
   > Experiments on multiple geospatial benchmarks demonstrate that GeoForge consistently improves both task accuracy and tool-use trajectory quality across diverse LLM backbones, while substantially reducing tool-planning and reasoning errors for most LLMs.

91. **[SHE: Trajectory-driven Safety Harness Evolution for LLM Agents](https://arxiv.org/abs/2608.09885)** · 2026-08 · relevance 9 · tiered memory · method · assistants
   SHE evolves LLM agent safety boundaries from rollout trajectories with localized, attribution-guided updates.
   > Experiments on Agent-SafetyBench demonstrate that SHE effectively enhances safety through harness evolution, achieving a 3.1x ASR reduction compared with static SafeHarness, while also improving benign utility. The evolved harness further generalizes to unseen risks on the held-out AgentHarm benchmark and transfers across agent models without additional evolution.
   Benchmarks: Agent-SafetyBench, AgentHarm

92. **[OpenLoopEvolve: A Verifiable Self-Evolution Framework for Loop Policies in Long-Horizon Complex Tasks](https://arxiv.org/abs/2608.09380)** · 2026-08 · relevance 9 · tiered memory · method · general
   OpenLoopEvolve enables agents to evolve loop policies through online and offline mechanisms for better performance in long-horizon complex tasks.
   > On the simulated business benchmark YC-Bench, both modes improve aggregate task performance, task success rate, and risk metrics relative to a fixed initial Loop Policy.
   Benchmarks: YC-Bench

93. **[Private Etymology: Designing Relational Reuse of Shared Symbols in Long-Term Human-AI Interaction](https://arxiv.org/abs/2608.08443)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   The paper proposes Private Etymology, a machine-representable system for tracking and safely reusing dyad-specific symbols in long-term human-AI interaction.
   > I present a lifecycle model, an illustrative machine-readable schema, a working Apple Watch prototype, and a longitudinal research agenda.

94. **[SodaMem: Evidence-Grounded Temporal Graph Memory for LLM Agents](https://arxiv.org/abs/2608.08055)** · 2026-08 · relevance 9 · graph memory · tool · assistants
   SodaMem creates an evidence-grounded temporal graph memory for LLM agents to remember what is currently true over time.
   > On LongMemEval-S, our store-of-record configuration reaches 92.8% accuracy (464/500; best of N=3) at mean $0.00161/question (approximately 18.3k tokens; median $0.00111 / approximately 14.6k) with deepseek-v4-flash.
   Benchmarks: LongMemEval-S

95. **[From Experience to Expertise: Adoption-Aware Memory Learning for Data-Scarce NPU Kernel Synthesis](https://arxiv.org/abs/2609.35568)** · 2026-09 · relevance 8.5 · retrieval memory · method · coding
   SAGE uses adoption-aware credit assignment and selective consolidation to improve NPU kernel synthesis in data-scarce settings.
   > On NPUKernelBench, SAGE achieves a 95.5% execution rate versus 84.1% for the strongest controlled baseline, with 86.9% of solved operators outperforming torch\_npu. With GLM-5.3, SAGE achieves a 43.99x speedup over the torch\_npu reference on sparse flash attention.
   Benchmarks: NPUKernelBench

96. **[Continuous Context Management](https://arxiv.org/abs/2609.35540)** · 2026-09 · relevance 8.5 · summaries memory · method · general
   CCM compacts LLM agent memory continuously to reduce prompt size and input usage while improving performance with reinforcement learning guidance.
   > On WebShop, this objective substantially improves CCM over GRPO at both evaluated model scales and surpasses full-history GRPO for Qwen3-4B-Instruct, though not for Qwen3-8B. On Endless Terminals, the augmented method provides a modest improvement over GRPO, with both CCM policies outperforming the untrained full-history baseline. These results demonstrate that CCM is a viable inference paradigm for agents operating with substantially reduced retained context and that its performance can be improved through reinforcement…
   Benchmarks: WebShop, Endless Terminals

97. **[Sprout: Building Dynamic Memory While Reasoning for Agentic Video Understanding](https://arxiv.org/abs/2609.35497)** · 2026-09 · relevance 8.5 · graph memory · method · general
   Sprout builds dynamic memory while reasoning for agentic video understanding, updating memory online as questions are answered.
   > Across benchmarks on three models, Sprout achieves competitive or improved accuracy relative to representative offline memory methods, with no upfront construction stage and lower context cost per question.

98. **[EP-Mem: Elastic Privacy Memory for Social Relationship-Aware LLM Agents](https://arxiv.org/abs/2609.35233)** · 2026-09 · relevance 8.5 · tiered memory · method · assistants
   EP-Mem enables LLM agents to respect long-term social relationship boundaries through user-controlled privacy policies and dynamic disclosure controls.
   > Experiments show that EP-Mem achieves 94.0% privacy classification accuracy, improves disclosure-permission judgment from 22% to 68%, and reduces privacy leakage by 75.6%, while maintaining retrieval performance and cross-benchmark generalization.
   Benchmarks: EP-Bench

99. **[FlowState: Execution State as Memory for Long-Horizon LLM Agents](https://arxiv.org/abs/2609.34565)** · 2026-09 · relevance 8.5 · graph memory · method · assistants
   FlowState uses execution state as memory to improve long-horizon LLM agent performance and efficiency by retaining and revising historical information dynamically.
   > Compared with a full-context baseline using the same DeepSeek-V4-Flash model, FlowState improves the average success rate on MemoryArena and the average pass rate on $tau^3$-Bench by 4.55 and 13.95 percentage points, respectively, while reducing total token consumption by 43.2% and 40.6%..
   Benchmarks: MemoryArena, $tau^3$-Bench

100. **[ReplayLens: Auditing Agents' Use of Outcomes](https://arxiv.org/abs/2609.34177)** · 2026-09 · relevance 8.5 · retrieval memory · tool · coding
   ReplayLens audits which stored memory relationships drive agent decisions in black-box settings.
   > On black-box LLM interfaces, swapping scores changes decisions while moving intact pairs does not, separating score attachment from record order. A bounded-memory study exposes ingestion-order sensitivity that endpoint comparison misses. In sequential experiment planning, altered historical scores redirect exploration and reduce final utility despite fresh measurements. A code-debugging agent with sealed hidden tests shows the same pattern outside model selection. ReplayLens provides a relationship-level audit for deciding…

101. **[StateGuard: Analytical-State Management with Validity-Aware Intervention for Long-Horizon Data Agents](https://arxiv.org/abs/2609.34134)** · 2026-09 · relevance 8.5 · graph memory · method · general
   StateGuard manages analytical state validity in long-horizon data agents using a state graph and validation framework.
   > Experiments on three diverse long-horizon data-analysis benchmarks show that StateGuard consistently improves data-agent performance while reducing dependency-induced downstream error propagation, demonstrating the advantages of explicit analytical-state management for reliable long-horizon data analysis.

102. **[Vestrum: Improving Agent Harnesses by Adapting Their Verification, Structure and Memory](https://arxiv.org/abs/2609.33822)** · 2026-09 · relevance 8.5 · retrieval memory · method · unsure
   Vestrum improves agent harnesses by adapting verification, structure, and memory without retraining the model.
   > Across five settings and two baseline harnesses, the frozen harnesses improve held-out performance: UltraHorizon rises from 47.6 to 59.8 over GAM, Terminal-Bench 4 Hard from 63.7% to 70.3% of checks passed over Claude Code on eight held-out tasks at 1.03x test cost, and cell-type annotation agreement from 67.5% to 77.8% on held-out sections of one slide, alongside gains on LoCo…
   Benchmarks: UltraHorizon, Terminal-Bench 4 Hard, LoCoMo, AMA-Bench

103. **[Characterizing Memory Misalignment in Human-LLM Interaction From User Perspectives](https://arxiv.org/abs/2609.33623)** · 2026-09 · relevance 8.5 · retrieval memory · study · assistants
   The paper identifies and addresses memory misalignment in human-LLM interactions from user perspectives through mixed methods and co-design workshops.
   > Synthesizing these findings, we highlight the tension between supervisory agency and interaction overhead, and advocate for friction-aware memories that balance user oversight with conversation smoothness.

104. **[ActiveMem: Dynamic Latent Memory Trees for Long-Horizon Agents](https://arxiv.org/abs/2609.33244)** · 2026-09 · relevance 8.5 · graph memory · method · general
   ActiveMem uses dynamic latent memory trees to improve long-horizon agent reasoning with procedural dependency preservation and continuous adaptation.
   > Experiments across various agent benchmarks demonstrate that ActiveMem consistently improves task completion, reasoning stability, and memory efficiency over existing memory-based agents. Moreover, ActiveMem enables compact open-weight models to achieve competitive performance with substantially larger proprietary systems.

105. **[Beyond Memory Construction: Rethinking Memory Access for LLM-based Conversational Agents](https://arxiv.org/abs/2609.33226)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   Threader improves memory access for LLM agents by shifting from construction to efficient, structure-aware retrieval over raw interactions.
   > Extensive experiments demonstrate that Threader consistently improves answer accuracy and evidence recall, while significantly reducing the memory construction overhead.

106. **[The Epistemics of Agent Memory: Measuring, and Governing, the Consolidation Decision in Long-Horizon LLM Agents](https://arxiv.org/abs/2609.33013)** · 2026-09 · relevance 8.5 · skills memory · unsure · assistants
   The paper develops a framework for measuring and governing memory consolidation in long-horizon LLM agents through four phases of research.
   > On that question we report a resolved negative: after a graded-reuse redesign removed a structural ceiling, a two-benchmark study with 2,532 real answer cells finds the quality score does not predict real transfer accuracy (pooled Spearman $rho= -0.24$, n = 12, CI spanning zero).
   Benchmarks: ConsolidationBench

107. **[Tessera: Demand-Driven KV Cache Management for Retrieval-Augmented LLM Serving](https://arxiv.org/abs/2609.32999)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   Tessera enables demand-driven KV cache management for RAG and agent-memory workloads by using retrieval to coordinate cache reuse and request routing.
   > Tessera lowers mean TTFT by up to 3.6x over SGLang and LMCache with EPIC at matched request rates, and sustains low TTFT at rates where the baselines saturate, while matching the answer quality of the underlying composition policy.

108. **[ARSM: Auto-Regressive State Machine for Agentic Reasoning Compression](https://arxiv.org/abs/2609.32852)** · 2026-09 · relevance 8.5 · compression memory · method · general
   ARSM compresses reasoning in agentic tasks with a lightweight, training-free framework that maintains performance while reducing token usage.
   > ARSM maintains the task performance while simultaneously reducing token consumption, offering a practical, cost-effective route toward scalable autonomous agents for long-horizon tasks.
   Benchmarks: Webshop, Multi-Objective Multi-Hop QA, SWE-Bench Lite

109. **[Decision-Sufficient State Representations: Measuring and Reducing Write-Time Regret](https://arxiv.org/abs/2609.32805)** · 2026-09 · relevance 8.5 · summaries memory · method · games
   The paper trains LLM writers to reduce regret by choosing better state representations for long tasks.
   > On a pre-registered test split opened once, training adds +7.0 \[+1.9, +12.2\] points of success when facts are needed soon...
   Benchmarks: TextWorld

110. **[Self-Evolving Time-Series Forecasting Agents with Episodic Memory and Online Policy Learning](https://arxiv.org/abs/2609.32689)** · 2026-09 · relevance 8.5 · retrieval memory · method · general
   FASE uses episodic memory and online policy learning to let LLM agents self-evolve via feedback from past forecasting instances without parameter updates.
   > Across these 29 configurations, FASE attains the strongest aggregate point forecasting performance among the evaluated methods and reduces the normalised MAE by 9.1% relative to the best individual foundation model baseline.
   Benchmarks: GIFT-Eval

111. **[EMIR$^2$: Evolution-Aware Memory with Intent-Guided Multi-Round Retrieval](https://arxiv.org/abs/2609.32584)** · 2026-09 · relevance 8.5 · graph memory · method · assistants
   EMIR$^2$ enables LLM agents to maintain evolving long-term memory with intent-guided, multi-round retrieval for better historical knowledge adaptation and evidence tracing.
   Benchmarks: LoCoMo, MemConflict

112. **[Learning from Others, Acting for You: Cross-User Memory Sharing for LLM Agents](https://arxiv.org/abs/2609.32511)** · 2026-09 · relevance 8.5 · retrieval memory · method · web
   ShareMem enables LLM agents to share reusable experiences while grounding them in receiving users' preferences for improved task performance.
   > It improves step success, average task success, and dialogue-macro coding scores, respectively, over matched user-local memory across all four models.
   Benchmarks: Mind2Web, VitaBench~2.0, MemoryCode

113. **[Shared Worlds, Private Minds: Structured Memory for Long-Form Writing as World Creation](https://arxiv.org/abs/2609.32401)** · 2026-09 · relevance 8.5 · graph memory · method · games
   NarraWorld creates a structured memory system for long-form writing by treating memory as world creation with four interconnected views.
   > Across three writing benchmarks, NarraWorld achieves the strongest aggregate results. Its memory also transfers to situated role-playing and largely preserves recall on a general-purpose long-term memory benchmark, paving the way for agents that sustain coherent storyworlds across diverse narrative tasks.

114. **[Enabling Timely Guidance before Skill Retrieval: Retaining Helpful Warm Tips in Agent Context](https://arxiv.org/abs/2609.32339)** · 2026-09 · relevance 8.5 · skills memory · method · coding
   TipsWarm provides timely, low-cost skill guidance by storing and injecting useful 'warm tips' into agent conversations before skill retrieval.
   > In three coding and iterative task-execution benchmarks, TipsWarm achieves the highest task success rate while remaining time-efficient, compared to recent skill and general memory baselines.

115. **[MemTransfer: Benchmarking Memory Beyond Matched Experience in Embodied Decision-Making](https://arxiv.org/abs/2609.32313)** · 2026-09 · relevance 8.5 · retrieval memory · benchmark · robotics
   MemTransfer benchmarks memory representations in embodied agents under changing conditions.
   > At the new test start, increasing from one to four relevant demonstrations raises Episodic success by 14.3 percentage points, while the other evaluated representations gain no more than 1.3 percentage points.

116. **[Before Answering: Evidence Sufficiency under Size-Matched Memory Construction](https://arxiv.org/abs/2609.32269)** · 2026-09 · relevance 8.5 · retrieval memory · unsure · assistants
   The paper proposes a size-matched method to detect insufficient evidence in memory for AI agents without leaking labels through memory size.
   Benchmarks: MuSiQue, HotpotQA

117. **[LAM: Efficient Lossy Agent Memory Framework With A Retrieval-Score Error Bound](https://arxiv.org/abs/2609.32256)** · 2026-09 · relevance 8.5 · summaries memory · method · general
   LAM reduces agent memory size with a bounded loss of information while improving inference speed.
   > On 600 agent trajectories, LAM removes 22.47% of observation tokens while retaining 99.984% of the measured gold-patch evidence.

118. **[BioDyad: Synchronize Biomedical Discovery and Machine Learning Engineering](https://arxiv.org/abs/2609.31939)** · 2026-09 · relevance 8.5 · graph memory · method · science
   BioDyad synchronizes biomedical discovery and ML engineering using Monte Carlo graph search with two hierarchies for improved program execution across tasks.
   > It achieves the highest penalized all-task score and task success rate among four agent methods and a one-shot baseline under each backend.

119. **[COUNTERMEM: World-Model Verified Counter-Factual Memory for Language Agents](https://arxiv.org/abs/2609.31874)** · 2026-09 · relevance 8.5 · retrieval memory · method · general
   COUNTERMEM creates verified counterfactual memory using executable world models to improve language agent performance across tasks.
   > With gpt-oss-120b, COUNTERMEM improves both ReAct and Reflexion on all 12 benchmarks across six domains, averaging a gain of 12.6 percentage points over their unaugmented versions.
   Benchmarks: ReAct, Reflexion

120. **[ActKV: Efficient LLM Agents through Action-Guided KV Cache Management](https://arxiv.org/abs/2609.31395)** · 2026-09 · relevance 8.5 · compression memory · method · general
   ActKV compresses KV caches by prioritizing action-critical entries for agentic LLM inference, improving efficiency and throughput.
   > On long-trace tasks, ActKV retains an average of 98.53% of FullKV's accuracy with only 25.98% of its peak KV cache memory. It also achieves 3.97 times and 3.58 times FullKV's token and task throughput, delivering state-of-the-art performance.

121. **[MACBT: A Multi-Agent Cognitive Behavioral Therapy Decision Support System with Longitudinal Memory](https://arxiv.org/abs/2609.30939)** · 2026-09 · relevance 8.5 · tiered memory · method · multi-agent
   MACBT provides a multi-agent CBT decision support system with longitudinal memory for improved clinical efficiency and session quality.
   > The full memory-augmented system further improves session quality by 12.6% and achieves a longitudinal mean of 2.29 on cross-session continuity, intervention progression, and personalization.
   Benchmarks: GPT-4 judges

122. **[Qwen-Planner-Agent: A Closed-Loop AI-for-AI Framework for Real-World Mobile Planner Agents](https://arxiv.org/abs/2609.29892)** · 2026-09 · relevance 8.5 · tiered memory · method · multi-agent
   Qwen-Planner-Agent uses a closed-loop AI-for-AI framework to improve mobile planning through AI-driven data, training, and model-harness co-evolution.
   > Qwen-Planner-Agent achieves the best overall performance among all evaluated models and systems on MobilePA-Bench, improving over its base model across tool use, memory, skills, and sub-agent coordination. Further evaluations of our model show improvements across non-mobile agentic benchmarks while largely preserving general capabilities.
   Benchmarks: MobilePA-Bench

123. **[Scope Before You Persist: Preventing Cross-Family Interference in Agent Memory](https://arxiv.org/abs/2609.29144)** · 2026-09 · relevance 8.5 · retrieval memory · study · coding
   The paper shows that matching retrieval scope to certification scope improves agent memory reliability by preventing cross-family interference.
   Benchmarks: ProcStream-RSI

124. **[Agent Memory with Episodic Retrieval for Financial Decision-Making](https://arxiv.org/abs/2609.28771)** · 2026-09 · relevance 8.5 · retrieval memory · method · multi-agent
   META introduces an episodic-memory-augmented multi-agent framework for improved financial decision-making with regime-aware, interpretable, and low-latency trading.
   > META achieves improved directional accuracy and robustness under short-horizon evaluation.

125. **[Learning from Failures: Heterogeneous Graph Memory for Small Language Model Tool-Using Agents](https://arxiv.org/abs/2609.28003)** · 2026-09 · relevance 8.5 · graph memory · method · unsure
   FRESH uses heterogeneous graph memory to help small language models avoid failures in tool-using agents by preserving causal context and safety conditions.
   > Experiments on $tau$-Bench and AppWorld with multiple open-source models show that FRESH consistently improves task success and tool-use reliability over no-memory agents and representative memory-based baselines.
   Benchmarks: $tau$-Bench, AppWorld

126. **[Memory Control Signals Emerge Before Action in Long Horizon Agents](https://arxiv.org/abs/2609.27286)** · 2026-09 · relevance 8.5 · parametric memory · method · assistants
   The paper discovers that memory control signals emerge before actions in long-horizon agents and proposes PaMER to reduce context use while maintaining performance.
   Benchmarks: WorkBuddyBench

127. **[ChipMEM: Verification-Grounded Memory for EDA Agents](https://arxiv.org/abs/2609.27067)** · 2026-09 · relevance 8.5 · skills memory · method · coding
   ChipMEM introduces a verification-grounded memory layer for EDA agents that enables cross-task skill transfer through procedural and statistical memory components.
   Benchmarks: RTLRewriter-Bench, CVDP

128. **[Hot-Cold Tiering of HBM and High Bandwidth Flash for Agentic LLM Serving](https://arxiv.org/abs/2609.25782)** · 2026-09 · relevance 8.5 · tiered memory · method · coding
   The paper proposes a hot-cold memory hierarchy using HBM for frequent KV accesses and HBF for rare, resumed sessions in agentic LLM serving.
   Benchmarks: Qwen3-Coder-30B-A3B

129. **[From Pattern Recognizers to Personalized Companions: A Survey of Large Language Models in Mental Health](https://arxiv.org/abs/2609.25186)** · 2026-09 · relevance 8.5 · tiered memory · survey · assistants
   This survey traces the evolution of LLMs in mental health through three phases: passive tools, empathetic conversationalists, and personalized cognitive companions.
   > Viewing the field through this developmental lens, we provide a comprehensive synthesis of existing work, an insightful narrative of its trajectory, and a clear roadmap for future innovation in responsible, effective, and human-centered AI for mental healthcare.

130. **[Machine-Interpretable Information: Compiling Documents into Searchable and Readable Protocol States](https://arxiv.org/abs/2609.23371)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   The paper introduces Machine-Interpretable Information (MII) to compile documents into transferable, searchable, and readable protocol states for agent-to-agent memory sharing.
   > On HotpotQA (7,405 queries), Residual-MII exceeds full-context Exact Match at approximately 7% of the attention FLOPs, suggesting a paradigm shift toward compiled, transferable neural document formats.
   Benchmarks: HotpotQA

131. **[OptiSkill: A Hierarchical and Evolving SkillBank for LLM-Based Optimization Modeling](https://arxiv.org/abs/2609.22987)** · 2026-09 · relevance 8.5 · skills memory · method · assistants
   OptiSkill builds a hierarchical, evolving SkillBank to improve LLM-based OR modeling through reusable, solver-verified formulation skills.
   > Experiments on eight OR modeling benchmarks show that OptiSkill improves formulation accuracy across LLM backbones, outperforms strong agentic baselines, and gains further by expanding SkillBank coverage and reliability.
   Benchmarks: eight OR modeling benchmarks

132. **[The Price of Safety: Benign-Case Utility and Token Overhead of Memory-Poisoning Defenses in LLM Agents](https://arxiv.org/abs/2609.22818)** · 2026-09 · relevance 8.5 · retrieval memory · study · assistants
   The paper evaluates the real-world cost of memory-poisoning defenses in LLM agents under benign conditions.

133. **[MACE: Memory-Agent Co-Evolution with Adaptive Memory Graphs for Multi-Agent Systems](https://arxiv.org/abs/2609.21533)** · 2026-09 · relevance 8.5 · graph memory · method · multi-agent
   MACE improves memory retention and retrieval in multi-agent systems by co-evolving memory structure and agent usage through feedback loops.
   > Across eight benchmarks, MACE outperforms ten baselines with an average score of 81.11%, compared with 78.97% for the strongest baseline, SAGE.

134. **[ArenaFlow: From Trajectory Ranking to Hierarchical Credit Propagation for Open-Ended Agent RL](https://arxiv.org/abs/2609.21378)** · 2026-09 · relevance 8.5 · skills memory · method · general
   ArenaFlow uses hierarchical credit propagation to improve open-ended agent RL through step-level and skill-level supervision from pairwise comparisons.
   > Extensive experiments validate ArenaFlow's effectiveness on open-ended agent tasks.

135. **[CoLearn: An Agentic Tutor that Learns its Learner in a Human--AI Co-Learning Loop](https://arxiv.org/abs/2609.21154)** · 2026-09 · relevance 8.5 · tiered memory · method · assistants
   CoLearn presents an AI tutor that learns the learner's mastery and misconceptions in real time to deliver personalized questions.
   > In blind A/B evaluation, questions conditioned on this memory are preferred over non-personalised ones 68-69% of the time, and in persona simulations with hidden ground-truth mastery the agent's belief converges toward the learner's true mastery.

136. **[Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks](https://arxiv.org/abs/2609.19913)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   The paper presents a digital twin framework using LLMs to simulate realistic opinion dynamics in social networks.
   > The results show that the capability of the proposed framework reproduces opinion trajectories and reduces individual prediction error by more than 50% compared to the best-performing classical baseline (Mistral-7B achieves Mean Absolute Error (MAE) = 0.150 and 0.121 on the COVID-19 and US Election 2020 datasets, respectively). We observe similar improvements in structural alignment (Delta\_r = 0.120 and 0.180) and polarization dynamics (…
   Benchmarks: COVID-19 discourse, U.S elections 2020

137. **[Self-Evolving Search Index](https://arxiv.org/abs/2609.19656)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   SELF-INDEX enables an index to self-evolve without human intervention by autonomously diagnosing and revising index keys based on retrieval performance and simulated queries.
   > Across diverse corpora and retrievers, SELF-INDEX consistently improves retrieval performance while outperforming existing index optimization methods. We further show that these benefits extend to downstream applications, improving the effectiveness and efficiency of search agents and helping agent memory systems retrieve useful past interactions.

138. **[Clueing up LLMs with Tool-Augmented Deductive Reasoning](https://arxiv.org/abs/2609.18736)** · 2026-09 · relevance 8.5 · graph memory · method · games
   The paper evaluates tool-augmented deductive reasoning in a multi-agent Clue game to improve logical consistency and task success over extended interactions.
   > We compare this approach against the baseline to evaluate how tool augmentation supports reasoning quality and task success for autonomous agents in a strategic reasoning environment.

139. **[Rollback the World, Keep the Reflection: Rollback-Induced Reflection for Long-Horizon LLM Agents](https://arxiv.org/abs/2609.18304)** · 2026-09 · relevance 8.5 · summaries memory · method · general
   RIR enables LLM agents to rollback execution and retain useful knowledge for better long-horizon task performance.
   > Experiments on three long-horizon benchmarks show that RIR consistently improves average task performance across multiple LLM backbones, with structured reflection memory preserving useful experience and selective rollback enabling efficient recovery.

140. **[WFM: Wiki Foundation Model for Complex Agentic Reasoning](https://arxiv.org/abs/2609.18182)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   WFM proposes a Wiki Foundation Model for scalable, agent-native knowledge representation and retrieval with dense semantic contexts and efficient distributed training.
   > Extensive evaluations across five long-term agent memory and multi-hop reasoning benchmarks demonstrate the remarkable performance of WFM, while achieving a 10.5 times training acceleration on distributed clusters.

141. **[Agora: Git as Shared Memory for Collective AutoResearch](https://arxiv.org/abs/2609.18094)** · 2026-09 · relevance 8.5 · graph memory · method · multi-agent
   Agora uses Git-like shared memory to enable research agents to collaborate and build on each other's work without central control.
   > Given 141 pretrained donor models and a frozen 119.6M-parameter attention-SSM hybrid whose dimensions match no donor, the workers had to initialize the target without training data or gradient updates. They published 1,703 contributions and reduced the development evaluator score from 3.39 to 1.899 bits per byte, closing 62% of the gap to a trained GPT-2 124M. The best method compresses donor next-token statistics into the target's…

142. **[TuiML: Machine Learning for AI Agents](https://arxiv.org/abs/2609.17984)** · 2026-09 · relevance 8.5 · retrieval memory · tool · coding
   TuiML is a machine-learning library designed specifically for AI agents, enabling autonomous learning, experimentation, and workflow composition.
   > Benchmarks show TuiML remains predictively competitive with scikit-learn and Weka.

143. **[Collaborative Memory for Multi-Agent VLM Systems](https://arxiv.org/abs/2609.17921)** · 2026-09 · relevance 8.5 · tiered memory · method · multi-agent
   The paper proposes a framework for shared visual memory in multi-agent VLM systems to enable collaboration through distributed perception and reasoning.
   > The proposed framework provides a foundation for building reliable and resource-efficient agent teams.

144. **[HarnessVLN: Unifying Training-Free Embodied Navigation through an Agent Harness](https://arxiv.org/abs/2609.15195)** · 2026-09 · relevance 8.5 · graph memory · method · robotics
   HarnessVLN enables training-free embodied navigation by unifying instruction-following and object-goal navigation through a shared Agent Harness.
   > Across R2R, RxR, HM3D-v2, and HM3D-OVON, HarnessVLN achieves success rates of 60.8%, 53.9%, 76.0%, and 59.3%, respectively, outperforming prior training-free state-of-the-art methods.
   Benchmarks: R2R, RxR, HM3D-v2, HM3D-OVON

145. **[Semantic-TVM: Structure-Preserving Trustworthy Virtual Memory for Memory-Augmented and Tool-Using Agents](https://arxiv.org/abs/2609.15011)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   Semantic-TVM protects sensitive memory values while preserving task-relevant context for memory-augmented and tool-using agents.
   > On Memory-EHR and Memory-RAP across two providers, span-level projection recovers most of the EHR utility lost under whole-field replacement (Task Success 84.17% vs. 52.33% on DeepSeek) while measured exposure stays low and workflows remain executable.
   Benchmarks: Memory-EHR, Memory-RAP

146. **[Retrieval-Driven Memory Reconsolidation for Long-Term LLM Agents](https://arxiv.org/abs/2609.16053)** · 2026-09 · relevance 8.5 · graph memory · method · assistants
   REALM uses retrieval-driven memory reconsolidation to evolve long-term memory in LLM agents continuously.
   Benchmarks: LoCoMo, LongMemEval

147. **[LIMBO: Lifelong Inference-Time Memory and Budget Optimization for LLM Agents](https://arxiv.org/abs/2609.14138)** · 2026-09 · relevance 8.5 · retrieval memory · method · assistants
   LIMBO learns to allocate memory and inference budget online for LLM agents without retraining, improving cost-accuracy tradeoffs and reducing inference cost significantly.
   > Across three LLM backbones on LifelongAgentBench, LIMBO achieves better cost-accuracy tradeoffs than state-of-the-art memory-augmented baselines and nearly matches all strongest such baselines at up to ~83% lower inference cost (~53% on average).
   Benchmarks: LifelongAgentBench

148. **[When Malicious Instructions Persist: Persistent Memory Poisoning Attack on Harness-Based Agents](https://arxiv.org/abs/2609.13889)** · 2026-09 · relevance 8.5 · retrieval memory · study · coding
   The paper proposes PMPA, a persistent memory poisoning attack that injects and triggers malicious instructions in harness-based LLM agents across sessions.
   > Across all settings, PMPA achieves average Injection Success Rate (ISR) and Cross-session Attack Success Rate (C-ASR) of 73.7%/ 55.5% on OpenClaw and 66.9%/ 81.7% on Claude Code, while preserving benign task performance on both systems.
   Benchmarks: OpenClaw, Claude Code

149. **[GeoSkill:Experience-Driven Hierarchical Skill Learning with Collaborative Revision forGeospatialAgents](https://arxiv.org/abs/2609.13667)** · 2026-09 · relevance 8.5 · skills memory · method · assistants
   GeoSkill transforms historical geospatial execution experience into reusable hierarchical skills for improved task accuracy and tool reliability.
   > Extensive experiments on EarthBench and ThinkGeo demonstrate that GeoSkill effectively transforms historical execution experience into reusable hierarchical skills, improving both end-to-end task accuracy and tool-execution reliability in geospatial tasks.
   Benchmarks: EarthBench, ThinkGeo

150. **[LifeFuse-Mem: Lifecycle-Aware State Fusion Against Temporary Overwriting for Long-Term Memory](https://arxiv.org/abs/2609.12436)** · 2026-09 · relevance 8.5 · tiered memory · method · assistants
   LifeFuse-Mem introduces a lifecycle-aware memory system to prevent temporary information from overwriting durable knowledge in long-running LLM agents.
   > On the controlled anti-overwrite benchmark, LifeFuse-Mem improves acquisition-controlled retention and reduces temporary overwrite; on two public long-memory benchmarks, it remains broadly competitive. These results suggest that explicit lifecycle signals can help diagnose and mitigate overwrite in compact online memory.
