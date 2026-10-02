# Agent memory: the most relevant papers so far

The 150 highest-scoring of the 1,627 papers read so far that score 8.5 or more for relevance to agent memory. Every one of them is in [memory.csv](memory.csv), with its notes. Scores and labels are the model's readings of the title and abstract; quoted lines are copied from the abstract and checked.

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

5. **[MAPLE-Guard: Memory-Aware Link Enforcement Against Memory-Link Poisoning in Multi-Agent Systems](https://arxiv.org/abs/2608.00426)** · 2026-08 · relevance 10 · retrieval memory · method · multi-agent
   MAPLE-Guard defends multi-agent systems by monitoring memory lifecycle to prevent poisoned memory from spreading.
   > In the main evaluation, MAPLE-Guard lowers attack success rate (ASR) from 38.2% to 0.9% on LongMemEval and from 34.7% to 0.2% on AppWorld; it also raises multi-agent defense success rate (MDSR) from 54.0% to 74.3% and from 42.5% to 99.8% on the same benchmarks.
   Benchmarks: LongMemEval, AppWorld

6. **[CrystalMem: Elastic Memory for Self-Evolving LLM Agents via Knowledge Crystallization](https://arxiv.org/abs/2608.00303)** · 2026-07 · relevance 10 · compression memory · method · general
   CrystalMem enables LLM agents to maintain capability after memory budget reductions through elastic, fidelity-based memory management.
   > From a 50% byte budget, CrystalMem matches the strongest budgeted baseline at full provision on every environment; at equal budgets, it leads by +4.6 pp on average.

7. **[MemSecBench: Tracking Agent Memory Poisoning from Persistence to Consequence and Repair](https://arxiv.org/abs/2607.27080)** · 2026-07 · relevance 10 · retrieval memory · benchmark · general
   MemSecBench evaluates agent memory security across persistence, consequences, and repair in real-world contexts.
   > Across all 24 configurations, malicious memory persists in 84.2% of all cases, and the full Write--Execute chain succeeds in 50.3%. Among successfully poisoned cases, 59.6% complete the full Execute chain, while 56.1% achieve selective repair.
   Benchmarks: MemSecBench

8. **[MemOps: Benchmarking Lifecycle Memory Operations in Long-Horizon Conversations](https://arxiv.org/abs/2607.12893)** · 2026-07 · relevance 10 · tiered memory · benchmark · assistants
   MemOps introduces a benchmark that evaluates long-horizon memory through operation-level traces instead of final answer accuracy.
   > Across long-context, retrieval-based, parametric and managed-memory systems, MemOps disentangles failure modes that final-answer accuracy alone conceals, revealing that current systems remain far from uniformly reliable.

9. **[Memory-Orchestrated Semantic System (MOSS): An Auditable Agentic Memory Architecture](https://arxiv.org/abs/2607.04391)** · 2026-07 · relevance 10 · graph memory · tool · assistants
   MOSS provides an auditable, agentic memory architecture with symbolic, reproducible retrieval from a relational database.

10. **[Mandol: An Agglomerative Agent Memory System for Long-Term Conversations](https://arxiv.org/abs/2606.29778)** · 2026-06 · relevance 10 · graph memory · method · assistants
   Mandol consolidates fragmented memory into a unified, efficient system for long-term conversations with better accuracy and speed.
   Benchmarks: LoCoMo, LongMemEval

11. **[T-Mem: Memory That Anticipates, Not Archives](https://arxiv.org/abs/2606.15405)** · 2026-06 · relevance 10 · retrieval memory · method · assistants
   T-Mem introduces a memory system that enables both surface-similar and semantically linked recall in conversational agents.
   > T-Mem reaches state-of-the-art on both LoCoMo and LoCoMo-Plus.
   Benchmarks: LoCoMo, LoCoMo-Plus

12. **[Temporal Order Matters for Agentic Memory: Segment Trees for Long-Horizon Agents](https://arxiv.org/abs/2606.04555)** · 2026-06 · relevance 10 · tiered memory · method · assistants
   SegTreeMem uses segment trees to preserve temporal order in long-horizon conversational agent memory for better answer quality.
   > Across three long-horizon memory benchmarks and two LLM backbones, SegTreeMem improves answer quality over flat retrieval, graph-structured memory, and tree-structured memory baselines.

13. **[DELTAMEM: Incremental Experience Memory for LLM Agents via Residual Trees](https://arxiv.org/abs/2606.03083)** · 2026-06 · relevance 10 · graph memory · method · general
   DeltaMem uses residual trees to store incremental experience memories for LLM agents, reducing redundancy and improving retrieval coherence.
   > Experiments across diverse interactive environments show that DeltaMem consistently outperforms existing baselines.

14. **[ElasticMem: Latent Memory as a Learnable Resource for LLM Agents](https://arxiv.org/abs/2605.30690)** · 2026-05 · relevance 10 · parametric memory · method · general
   ElasticMem learns to use memory as an elastic latent resource for LLM agents.
   > Across Qwen2.5-3B-Instruct and Qwen2.5-7B-Instruct backbones, ElasticMem improves weighted average QA accuracy by 26.2% and 24.6%, and improves ALFWorld success rate by 66.3% and 27.2%, respectively, over the strongest baselines, while achieving the lowest ALFWorld token cost.
   Benchmarks: MemorySuite

15. **[MemLineage: Lineage-Guided Enforcement for LLM Agent Memory](https://arxiv.org/abs/2605.14421)** · 2026-05 · relevance 10 · graph memory · method · general
   MemLineage adds cryptographic provenance and derivation lineage to LLM agent memory to prevent untrusted content from justifying sensitive actions while enabling recall.
   > MemLineage is the only configuration in that harness that drives all three columns to zero ASR, while sub-millisecond per-operation overhead keeps it well below the noise floor of any LLM call. A Codex-backed AgentDojo bridge further separates strong-model behavior from defense-layer behavior: under an intentionally vulnerable tool-output profile, no-defense and signature-only baselines fail on all six banking pairs, while all MemLineage rows reduce strict AgentDojo ASR to zero.

16. **[Belief Memory: Agent Memory Under Partial Observability](https://arxiv.org/abs/2605.05583)** · 2026-05 · relevance 10 · unsure memory · method · general
   BeliefMem uses probabilistic memory to retain multiple candidate conclusions with uncertainty in partially observable environments.
   > Empirical evaluations on LoCoMo and ALFWorld benchmarks show that, even with limited data, BeliefMem achieves the best average performance, remarkably outperforming well-known baselines.
   Benchmarks: LoCoMo, ALFWorld

17. **[Mesh Memory Protocol: Semantic Infrastructure for Multi-Agent LLM Systems](https://arxiv.org/abs/2604.19540)** · 2026-04 · relevance 10 · graph memory · tool · multi-agent
   The Mesh Memory Protocol enables multi-agent LLM systems to collaborate across sessions with shared, semantic memory.
   > MMP is specified, shipped, and running in production across three reference deployments…

18. **[Synthius-Mem: Brain-Inspired Hallucination-Resistant Persona Memory Achieving 94.4% Memory Accuracy and 99.6% Adversarial Robustness on LoCoMo](https://arxiv.org/abs/2604.11563)** · 2026-04 · relevance 10 · retrieval memory · method · assistants
   Synthius-Mem creates a brain-inspired memory system that achieves high accuracy and adversarial robustness in AI agent conversations.
   > On the LoCoMo benchmark (ACL 2024, 10 conversations, 1,813 questions), Synthius-Mem achieves 94.37% accuracy, exceeding all published systems including MemMachine (91.69%, adversarial score is not reported) and human performance (87.9 F1). Core memory fact accuracy reaches 98.64%. Adversarial robustness, the hallucination resistance metric that no competing system reports, reaches 99.55…
   Benchmarks: LoCoMo

19. **[Mnemon: Raw Records, Fast Judgments, Slow Thoughts](https://arxiv.org/abs/2609.36059)** · 2026-09 · relevance 9.5 · retrieval memory · method · assistants
   Mnemon divides memory into fast judgments and slow thinking for efficient long-term recall in LLMs.
   > With gpt-4.1-mini answering, as in a public re-evaluation of 14 systems, Mnemon scores 91.7% on LoCoMo, the highest among them, and 83.8% on LongMemEval-S, from under 4k tokens of context per question, with the lowest effective cost index on LoCoMo. With a reasoning model answering, it reaches 92.2% on LoCoMo and 94.4% on LongMemEval-S, the latter…
   Benchmarks: LoCoMo, LongMemEval-S

20. **[Remember Before You're Asked: MemDream for Self-Probing Memory Evolution](https://arxiv.org/abs/2609.34545)** · 2026-09 · relevance 9.5 · graph memory · method · assistants
   MemDream enables LLM agents to proactively probe and repair memory before failures occur.
   > Experiments on LoCoMo and MemoryAgentBench demonstrate that MemDream improves answer F1 by 4.5 points on LoCoMo and achieves a 9.1-point higher overall score on MAB over the strongest reactive-evolution baselines.
   Benchmarks: LoCoMo, MemoryAgentBench

21. **[Remember by Asking: Retrieval-Induced Memory Evolution for LLM Agents](https://arxiv.org/abs/2609.34438)** · 2026-09 · relevance 9.5 · retrieval memory · method · assistants
   RIME improves LLM agent memory by evolving it through retrieval-induced evidence integration instead of monolithic compression.
   > Extensive experiments on LoCoMo with Qwen3-235B-A22B and GPT-5.6 Sol show that RIME consistently achieves the best performance across all three quality metrics among the compared methods, while requiring substantially fewer query-time LLM tokens.
   Benchmarks: LoCoMo

22. **[EngramRAG: Dynamic Usage-Weighted Topology and Synaptic Consolidation for Multi-Hop Agentic Memory](https://arxiv.org/abs/2609.32049)** · 2026-09 · relevance 9.5 · graph memory · method · assistants
   EngramRAG improves multi-hop memory in agents with dynamic, usage-weighted topology and synaptic consolidation.
   > Evaluating on all 1,982 QA pairs across 10 long-term conversations in the LoCoMo benchmark, EngramRAG achieves +38.9% relative improvement in Recall@5 (53.21% vs. 38.29%, p \< 0.001) and +43.1% in MRR (0.4203 vs. 0.2937) over dense vector RAG, significantly outperforming Okapi BM2…
   Benchmarks: LoCoMo

23. **[RPMem: Learning Long-Term Recurrent Parametric Memory Across Sessions for LLM Agents](https://arxiv.org/abs/2609.23466)** · 2026-09 · relevance 9.5 · parametric memory · method · assistants
   RPMem introduces a parametric memory framework that evolves across sessions and transfers across LLM backbones.
   > With Qwen3-8B on PERMA, RPMem reaches 85.52%, outperforming the strongest parametric and text-based baselines by 5.32 and 12.98 percentage points, respectively.
   Benchmarks: PERMA

24. **[ROAM: Robust Organization of Atomic Memories for Agents through Semantic Relations](https://arxiv.org/abs/2609.09778)** · 2026-09 · relevance 9.5 · retrieval memory · method · assistants
   ROAM uses semantic relations to manage atomic memories, improving answer accuracy by up to 29.8 percentage points.
   > Across models and evaluation settings, ROAM improves answer accuracy by up to 29.8 percentage points.

25. **[Revoked but Still Authoritative: An Empirical Study of Revocation Enforcement in Agent-Memory Systems](https://arxiv.org/abs/2609.08258)** · 2026-09 · relevance 9.5 · retrieval memory · study · assistants
   The paper evaluates whether revoked facts are enforced in agent-memory systems during retrieval.
   > no system enforces revocation by default: the revoked fact is returned wherever the revocation label is visible to the retrieval layer, outranks its replacement, and leads agents to the unsafe action.

26. **[MoM: Memory of Memory](https://arxiv.org/abs/2609.25054)** · 2026-09 · relevance 9.5 · graph memory · method · assistants
   MoM introduces Provenant Memory to track memory provenance and retain displaced values for better validity and error recovery in LLM agents.

27. **[MemGuard: Persisting Verifier Signals for LLM-Agent Memory Governance](https://arxiv.org/abs/2608.21867)** · 2026-08 · relevance 9.5 · retrieval memory · method · coding
   MemGuard persists verifier signals as lifecycle metadata to improve memory reliability in LLM agents.
   > Averaged over five seeds, MemGuard achieves the best success metric and lowest average steps in all 16 backbone-benchmark settings, improving over ReasoningBank, the strongest prior baseline among the memory methods we evaluate, with a largest gain of 7.9 success-rate points on WebArena, 5.6 step-success-rate points on Mind2Web, and 2.4-3.5 points on terminal and software-engineering benchmarks.
   Benchmarks: Terminal-Bench 2.0, SWE-Bench Verified, WebArena, Mind2Web

28. **[Weighted Memory Tree: Remembering What Matters for Long-Horizon LLM Agents](https://arxiv.org/abs/2608.20631)** · 2026-08 · relevance 9.5 · tiered memory · method · general
   WMT introduces a hierarchical memory system that dynamically retains only high-utility information for long-horizon LLM agents.
   > Relative to linear memory, WMT improves accuracy by an average of 9.97 percentage points while reducing prompt-token usage by 32.8%.(Memory-poisoning experiments show that WMT limits the persistence and propagation of unreliable information.)
   Benchmarks: GAIA-Text

29. **[Caching for the Future: Scrub Jay Episodic Memory Principles for Agent Memory Systems](https://arxiv.org/abs/2608.04746)** · 2026-08 · relevance 9.5 · retrieval memory · method · assistants
   The paper introduces ScrubJay-MEM, a memory system using type-conditioned temporal decay for LLM agents.
   Benchmarks: TGT, MemoryAgentBench EventQA-64k

30. **[LeanMem: Simple and Efficient Long-Term Memory for LLM Agents](https://arxiv.org/abs/2608.03463)** · 2026-08 · relevance 9.5 · tiered memory · method · assistants
   LeanMem proposes a lightweight memory framework that stores dialogue content based on its compressibility, dynamics, and fidelity needs.
   > LeanMem improves accuracy over the strongest memory-based baseline in every setting, by up to 15.1 points, at the lowest or near-lowest construction cost, inference tokens, and latency.
   Benchmarks: LoCoMo, LongMemEval-S

31. **[Verifiable Memory: Learning Unified Memory Management with Local and Global Verifiers for Large Language Model Agents](https://arxiv.org/abs/2608.03137)** · 2026-08 · relevance 9.5 · tiered memory · method · assistants
   VerMem enables unified memory management with local and global verifiers for LLM agents.
   > Across five benchmarks and two LLM backbones, VerMem achieves the best result on the vast majority of reported metrics and consistently outperforms strong memory baselines. Under controlled online-token budgets on three interactive benchmarks, it also achieves the strongest efficiency--performance frontier among the compared methods.
   Benchmarks: two LLM backbones

32. **[LiveMem: Maintaining Memory State Continuity in Long-Running LLM Inference](https://arxiv.org/abs/2608.02515)** · 2026-08 · relevance 9.5 · parametric memory · method · assistants
   LiveMem introduces a memory state that maintains historical information across context changes in long-running LLM inference.
   > Our experiments show that LiveMem achieves leading overall performance among evaluated systems and other intrinsic memory methods. Experiments on LongMemEval show that LiveMem is able to answer the question based on the memory state, even when the supporting evidence has been removed from the current context, and evidence-distance analysis shows that useful information persists beyond the active window. LiveMem thus establishes state continuity as a distinct and complementary abstraction for continual LLM inference…
   Benchmarks: LongMemEval

33. **[MemSIF: From Structured Interactions to Dual-Track Fact Memory for LLM Agents](https://arxiv.org/abs/2608.01742)** · 2026-08 · relevance 9.5 · tiered memory · method · assistants
   MemSIF proposes a structured interaction-to-fact memory framework to improve LLM agent long-term memory by addressing temporal-structural and delayed utility misalignments.
   Benchmarks: LoCoMo, LongMemEval-S

34. **[PGMem: Tightly Coupled Persona-Memory Graph for Lifelong Personalized Agents](https://arxiv.org/abs/2608.01708)** · 2026-08 · relevance 9.5 · graph memory · method · assistants
   PGMem connects event and persona nodes with provenance edges for lifelong personalized dialogue agents.
   > Across three benchmarks with small language model backbones, PGMem consistently outperforms summary-based, persona-aware, graph-structured, and agentic memory baselines, and improves performance as the context grows.

35. **[When Memory Becomes Authority: Benchmarking Authority Collapse at the Memory Consolidation Boundary](https://arxiv.org/abs/2608.01679)** · 2026-08 · relevance 9.5 · retrieval memory · benchmark · unsure
   The paper identifies and benchmarks authority collapse in LLM agent memory consolidation.
   > Across seven consolidators based on widely used agent-memory systems and seven LLM backbones, we observe authority collapse in 48 of 49 evaluated configurations.
   Benchmarks: AuthMem-Bench

36. **[MemTX: Transactional Belief Commit for Stateful Agent Memory](https://arxiv.org/abs/2607.23929)** · 2026-07 · relevance 9.5 · tiered memory · method · multi-agent
   MemTX introduces a transactional belief-commit protocol for stateful agent memory to prevent irreversible harm from stale or polluted writes.
   > Across five backbones from three model families, MemTX leads all eight baselines with paired-McNemar significance on four backbones and statistically ties the best baseline on the fifth and strongest, while remaining the only method with zero downstream harm on every backbone.

37. **[Ground Truth First: A Longitudinal Evaluation Instrument for Agent Memory, and the Tenure Crossover in Memory-Architecture Rankings](https://arxiv.org/abs/2607.21962)** · 2026-07 · relevance 9.5 · tiered memory · tool · assistants
   The paper introduces a synthetic memory benchmark with validity intervals and provenance that inverts standard memory rankings over time.
   > the inversion is positive for all six users under complete cross-family re-judging (exact p=0.031).

38. **[Beyond Memory Leaderboards: Evaluating Scientific Memory as Budgeted Context Restoration](https://arxiv.org/abs/2607.16848)** · 2026-07 · relevance 9.5 · retrieval memory · benchmark · science
   The paper introduces full-text scientific memory benchmarks and evaluates systems as budgeted, modality-aware context restoration.
   > on PAIM Graphiti wins convincingly but uses 2.6M characters of retrieved context per query, and after controlling for retrieval budget the lead disappears. On PTr, for the systems where BM25 retrieval can be added cleanly, the sparse-dense hybrid is the single most significant intervention: hybrid variants of Simple RAG, Mem0, and Theoria tie for the lead within 0.03 points. Multi-judge and human side-by-side calibration show that LLM-as-a-judge rankings are consistent across frontier judges and…
   Benchmarks: Public AI Memory (PAIM, Public Transformers (PTr

39. **[Memory as a Controlled Process: Learned Adaptive Memory Management for LLM Agents](https://arxiv.org/abs/2607.13591)** · 2026-07 · relevance 9.5 · retrieval memory · method · general
   MemCon learns an adaptive policy to control when and how LLM agents retrieve, inject, and consolidate memory based on context.
   > Across 6 benchmarks, 3 agent frameworks, and 3 LLM backbones, MemCon consistently outperforms multiple memory baselines by up to 15.2 points in task success while reducing token consumption by 5--20%.$…

40. **[Parametric Multimodal User Memory: Storing What Captions Cannot Carry](https://arxiv.org/abs/2608.28609)** · 2026-07 · relevance 9.5 · parametric memory · method · assistants
   The paper builds a parametric memory system that stores perceptual user traits beyond text captions.
   > Neither suffices alone -- the VLM identifies cross-age faces at only 0.54 recall where a face encoder reaches 0.81, and an ungrounded encoder recognizes a two-person-scene referent at 0.05 -- yet together they reach correct-region oracle (0.96), generalizing to multi-speaker audio and video.
   Benchmarks: PerceptMem (12 domains

41. **[Your Agent's Memories Are Not Its Own: Forged Reasoning Attacks on LLM Agent Memory and Defenses](https://arxiv.org/abs/2607.05029)** · 2026-07 · relevance 9.5 · retrieval memory · study · unsure
   The paper introduces FARMA, an attack that forges and amplifies LLM agent reasoning memories, and SENTINEL, a defense that detects such forged entries effectively.
   > Our evaluation also shows that SENTINEL reduces FARMA's attack success rate to as low as 0% with no false positives observed across 326 benign agent traces.
   Benchmarks: A-MemGuard.

42. **[Temporal Validity in Retrieval Memory: Eliminating Stale-Fact Errors for AI Agents over Evolving Knowledge](https://arxiv.org/abs/2606.26511)** · 2026-06 · relevance 9.5 · retrieval memory · method · general
   MemStrata introduces a retrieval memory system that eliminates stale-fact errors in AI agents by enforcing temporal validity during knowledge evolution.
   > Across six benchmarks run locally with a 7B model, MemStrata ties RAG on static knowledge and reaches 0.95-1.00 accuracy on evolving knowledge (where RAG reaches 0.20-0.47). The central result is the stale-fact-error rate: when required to answer, RAG serves superseded values 15-40% of the time; MemStrata drives this to ~0%, a failure class RAG cannot avoid.

43. **[TRUSTMEM: Learning Trustworthy Memory Consolidation for LLM Agents with Long-Term Memory](https://arxiv.org/abs/2606.25161)** · 2026-06 · relevance 9.5 · tiered memory · method · assistants
   TrustMem improves memory reliability by verifying and optimizing LLM agent memory updates with preference-guided reinforcement learning.
   Benchmarks: MemoryAgentBench, HaluMem, Mem-alpha

44. **[MemAudit: Auditing Long-Term Agent Memory via Hidden User-State Recovery](https://arxiv.org/abs/2606.24595)** · 2026-06 · relevance 9.5 · retrieval memory · benchmark · assistants
   The paper introduces MEMPROBE, a benchmark that audits long-term agent memory by reconstructing hidden user states from memory artifacts.
   > Testing state-of-the-art memory agents, we find that successful assistance and recoverable memory behave as distinct capabilities. Task completion nearly saturates, even for a memoryless baseline, while category-balanced recovery stays moderate (about 0.6) and drops further under top-k retrieval.
   Benchmarks: MEMPROBE

45. **[RaMem: Contextual Reinstatement for Long-term Agentic Memory](https://arxiv.org/abs/2606.22844)** · 2026-06 · relevance 9.5 · retrieval memory · method · assistants
   RaMem improves long-term memory for agentic systems by ensuring retrieved memories are contextually valid and verifiable.
   > Experiments on long-term memory benchmarks show that RaMem consistently improves performance over strong memory baselines, with average F1 gains of more than 10% across several backbones.

46. **[Learning What Not to Forget: Long-Horizon Agent Memory from a Few Kilobytes of Learning](https://arxiv.org/abs/2606.20954)** · 2026-06 · relevance 9.5 · retrieval memory · method · assistants
   LRE learns to keep task-critical memory from a few kilobytes of data without neural models or compression.
   > On agents, LRE recovers 93% of the aggregate accuracy of keeping the entire history (41.1 vs. 44.0) and exceeds it by 27% on the simplest tasks, while requiring zero compressor calls and cutting the worst-case peak prompt by 52% .
   Benchmarks: LoCoMo

47. **[AgentMemBench: A Systematic Benchmark for Evaluating Long-Term Memory Management Strategies in Conversational AI Agents](https://arxiv.org/abs/2608.00009)** · 2026-06 · relevance 9.5 · retrieval memory · benchmark · assistants
   AgentMemBench evaluates five memory strategies in conversational AI using three datasets and multiple metrics for long-term recall effectiveness.
   > (1) EKV dominates on every quality axis (macro Recall@5 0.792, MRR 0.677, F1 0.156, Faithfulness 0.354); (2) long-range recall is decisive: on LoCoMo, where the gold turn lies many sessions back, ICW, WAM, GEM, and CBS retrieve almost nothing (Recall@5 \<= 0.005) while EKV alone reaches 0.573…
   Benchmarks: LoCoMo, MultiDoc2Dial, MSC

48. **[Less Context, More Accuracy: A Bi-Temporal Memory Engine for LLM Agents Where a Lean Retrieved Context Beats the Full History](https://arxiv.org/abs/2606.09900)** · 2026-06 · relevance 9.5 · retrieval memory · unsure · assistants
   Engram provides a bi-temporal memory engine that retrieves lean, accurate context instead of full history for LLM agents.
   > On the full 500-question LongMemEval\_S, graded by the official category-specific judge, Engram's lean configuration -- answering from a ~9.6k-token retrieved slice, never the full history -- scores 83.6% vs. 73.2% for full-context (+10.4 points, McNemar p \< 10^-6) at ~8x fewer tokens (9.6k vs. 79k), with 0/500 errored.
   Benchmarks: LongMemEval\_S

49. **[Scaling Self-Evolving Agents via Parametric Memory](https://arxiv.org/abs/2606.04536)** · 2026-06 · relevance 9.5 · parametric memory · method · general
   TMEM enables agents to learn from past experiences by updating LoRA weights in real time during episodes.
   Benchmarks: LoCoMo, LongMemEval-S, CL-Bench

50. **[From Untrusted Input to Trusted Memory: A Systematic Study of Memory Poisoning Attacks in LLM Agents](https://arxiv.org/abs/2606.04329)** · 2026-06 · relevance 9.5 · retrieval memory · study · unsure
   The paper identifies and classifies memory poisoning attacks in LLM agents and shows existing defenses fail to protect against them.
   Benchmarks: MPBench

51. **[Eywa: Provenance-Grounded Long-Term Memory for AI Agents](https://arxiv.org/abs/2605.30771)** · 2026-05 · relevance 9.5 · retrieval memory · method · assistants
   Eywa provides a provenance-grounded memory system that stores source evidence before beliefs and enables traceable, auditable memory retrieval for AI agents.
   > Under a frozen, artifact-recorded retrieval configuration, Eywa reaches 90.19% judge accuracy on the LoCoMo C1-C4 split with Claude Sonnet 4.6 write and QA roles. On LongMemEval-S, it reaches 88.2% retrieval-sufficiency accuracy. On BEAM, a 700-question technical-memory stress benchmark, it reaches 81.45% mean nugget score and 85.29% pass@score \>= 0.5.
   Benchmarks: LoCoMo, LongMemEval-S, BEAM

52. **[Rethinking Memory as Continuously Evolving Connectivity](https://arxiv.org/abs/2605.28773)** · 2026-05 · relevance 9.5 · graph memory · method · unsure
   FluxMem proposes a memory framework that evolves its connectivity dynamically for better adaptation in agentic environments.
   > Across three fundamentally distinct benchmarks including LoCoMo, Mind2Web, and GAIA, FluxMem achieves consistent state-of-the-art performance, demonstrating strong adaptation and generalization in complex agentic environments.
   Benchmarks: LoCoMo, Mind2Web, GAIA

53. **[MemMark: State-Evolution Attribution Watermarking for Agent Long-Term Memory Systems](https://arxiv.org/abs/2605.25002)** · 2026-05 · relevance 9.5 · parametric memory · method · general
   MemMark adds an owner-controlled watermark to agent memory by embedding attribution in latent write decisions, surviving snapshot leaks and attacks without relying on logs or metadata.
   > Across A-Mem and Graphiti on LoCoMo, with three LLM backbones, MemMark preserves memory utility: Overall F1 retains 99.6% of the unwatermarked baseline, while BLEU-1 changes by +0.2%. It also provides usable carrier capacity, with 1.16, 1.14, and 1.26 bits of mean entropy for update-target, link-target, and semantic-realization decisions. In the snapshot-only R3 setting, MemMark recovers the…
   Benchmarks: A-Mem, Graphiti, LoCoMo

54. **[RecMem: Recurrence-based Memory Consolidation for Efficient and Effective Long-Running LLM Agents](https://arxiv.org/abs/2605.16045)** · 2026-05 · relevance 9.5 · retrieval memory · method · assistants
   RecMem reduces token cost by consolidating memory only when recurrence is detected, instead of after every interaction.
   > Experiments show that RecMem reduces the memory construction token cost of three SOTA memory systems by up to 87% while exceeding their accuracy.

55. **[Hidden in Memory: Sleeper Memory Poisoning in LLM Agents](https://arxiv.org/abs/2605.15338)** · 2026-05 · relevance 9.5 · retrieval memory · study · assistants
   The paper identifies and studies sleeper memory poisoning as a delayed attack that corrupts LLM agent memories to influence future interactions.
   > Across stateful LLM assistants, poisoned memories were added up to 99.8% on GPT-5.5 and 95% on Kimi-K2.6. Crucially, among successful retrievals, poisoned memories cause attacker-intended agentic actions in 60-89% of evaluations across models.

56. **[EvolveMem:Self-Evolving Memory Architecture via AutoResearch for LLM Agents](https://arxiv.org/abs/2605.13941)** · 2026-05 · relevance 9.5 · retrieval memory · method · assistants
   EvolveMem enables LLM agents to autonomously evolve both memory content and retrieval mechanisms through self-directed research cycles.
   > Starting from a minimal baseline, the process converges autonomously, discovering effective retrieval strategies including entirely new configuration dimensions not present in the original action space.
   Benchmarks: LoCoMo, MemBench

57. **[ShadowMerge: A Novel Poisoning Attack on Graph-Based Agent Memory via Relation-Channel Conflicts](https://arxiv.org/abs/2605.09033)** · 2026-05 · relevance 9.5 · graph memory · method · general
   SHADOWMERGE presents a poisoning attack on graph-based agent memory by exploiting relation-channel conflicts to influence agent behavior unseen in prior attacks.
   > SHADOWMERGE achieves 93.8% average attack success rate, improving the best baseline by 50.3 absolute points, while having negligible impact on unrelated benign tasks.
   Benchmarks: PubMedQA, WebShop, ToolEmu

58. **[ZenBrain: A Neuroscience-Inspired 7-Layer Memory Architecture for Autonomous AI Systems](https://arxiv.org/abs/2604.23878)** · 2026-04 · relevance 9.5 · tiered memory · method · assistants
   ZenBrain proposes a 7-layer, neuroscience-inspired memory architecture that enhances AI memory through cooperative mechanisms and efficient cross-session reasoning.
   > On LongMemEval-500, ZenBrain wins all nine head-to-head answer-quality comparisons (3 competitors x 3 LLM judges) against Letta, Mem0 and A-Mem under Bonferroni-corrected significance (alpha=0.05/18, p\_min=6.2e-31, d in \[0.18, 0.52\]), and reaches 91.3% of a full-context oracle's binary-judge accuracy at 1/106…
   Benchmarks: LongMemEval-500, LoCoMo

59. **[Memanto: Typed Semantic Memory with Information-Theoretic Retrieval for Long-Horizon Agents](https://arxiv.org/abs/2604.22085)** · 2026-04 · relevance 9.5 · retrieval memory · unsure · general
   Memanto provides a fast, low-overhead memory system for agents using typed semantic memory and information-theoretic retrieval.
   > Memanto achieves state of the art accuracy scores of 89.8 percent and 87.1 percent respectively. These results surpass all evaluated hybrid graph and vector based systems while requiring only a single retrieval query, incurring no ingestion cost, and maintaining substantially lower operational complexity.
   Benchmarks: LongMemEval, LoCoMo

60. **[A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle](https://arxiv.org/abs/2604.16548)** · 2026-04 · relevance 9.5 · tiered memory · survey · general
   The paper surveys long-term memory security in LLM agents, proposing a lifecycle framework and Verifiable Memory Governance for robust, auditable memory control.
   > Our analysis indicates that robust Long-Term Memory (LTM) security cannot be retrofitted at retrieval or execution time alone, but must be anchored in storage-time provenance, versioning, and policy-aware retention from the outset.

61. **[When to Forget: A Memory Governance Primitive](https://arxiv.org/abs/2604.12007)** · 2026-04 · relevance 9.5 · retrieval memory · method · assistants
   The paper proposes Memory Worth to dynamically govern memory quality based on co-occurrence with successful outcomes.
   > We prove that MW converges almost surely to the conditional success probability p+(m) = Pr\[y\_t = +1 \| m in M\_t\] -- the probability of task success given that memory m is retrieved -- under a stationary retrieval regime with a minimum exploration condition.
   Benchmarks: all-MiniLM-L6-v2

62. **[Time is Not a Label: Continuous Phase Rotation for Temporal Knowledge Graphs and Agentic Memory](https://arxiv.org/abs/2604.11544)** · 2026-04 · relevance 9.5 · graph memory · method · assistants
   RoMem uses continuous phase rotation to distinguish persistent from evolving facts in temporal knowledge graphs for agentic memory systems.
   > On temporal knowledge graph completion, RoMem achieves state-of-the-art results on ICEWS05-15 (72.6 MRR). Applied to agentic memory, it delivers 2-3x MRR and answer accuracy on temporal reasoning (MultiTQ), dominates hybrid benchmark (LoCoMo), preserves static memory with zero degradation (DMR-MSC), and generalises zero-shot to unseen financial domains (FinTMMBench).
   Benchmarks: ICEWS05-15, MultiTQ, LoCoMo, DMR-MSC, FinTMMBench

63. **[ADAM: A Systematic Data Extraction Attack on Agent Memory via Adaptive Querying](https://arxiv.org/abs/2604.09747)** · 2026-04 · relevance 9.5 · retrieval memory · method · general
   ADAM attacks agent memory by estimating data distribution and using entropy-guided queries to leak sensitive information with up to 100% success rate.
   > Extensive experiments demonstrate that our attack substantially outperforms state-of-the-art ones, achieving up to 100% ASRs.

64. **[MemMachine: A Ground-Truth-Preserving Memory System for Personalized AI Agents](https://arxiv.org/abs/2604.04853)** · 2026-04 · relevance 9.5 · tiered memory · tool · assistants
   MemMachine provides a ground-truth-preserving memory system for personalized AI agents with strong accuracy and efficiency gains.
   > on LongMemEvalS (ICLR 2025), a six-dimension ablation yields 93.0 percent accuracy, with retrieval-stage optimizations -- retrieval depth tuning (+4.2 percent), context formatting (+2.0 percent), search prompt design (+1.8 percent), and query bias correction (+1.4 percent) -- outperforming ingestion-stage gains such as sentence chunking (+0.8 percent).
   Benchmarks: LoCoMo, LongMemEvalS

65. **[ByteRover: Agent-Native Memory Through LLM-Curated Hierarchical Context](https://arxiv.org/abs/2604.01599)** · 2026-04 · relevance 9.5 · graph memory · tool · general
   ByteRover enables agent-native memory using an LLM that curates, structures, and retrieves knowledge in a hierarchical, file-based format with no external infrastructure.
   > Experiments on LoCoMo and LongMemEval demonstrate that ByteRover achieves state-of-the-art accuracy on LoCoMo and competitive results on LongMemEval while requiring zero external infrastructure, no vector database, no graph database, no embedding service, with all knowledge stored as human-readable markdown files on the local filesystem.
   Benchmarks: LoCoMo, LongMemEval

66. **[GAAMA: Graph Augmented Associative Memory for Agents](https://arxiv.org/abs/2603.27910)** · 2026-03 · relevance 9.5 · graph memory · method · assistants
   GAAMA builds a graph-augmented memory system for AI agents with concept-mediated traversal and repair mechanisms.
   Benchmarks: LoCoMo-10, MemoryArena

67. **[Cognis: Context-Aware Memory for Conversational AI Agents](https://arxiv.org/abs/2604.19771)** · 2026-03 · relevance 9.5 · retrieval memory · tool · assistants
   Cognis provides context-aware, persistent memory for conversational AI agents using a multi-stage retrieval pipeline.
   > We evaluate Cognis on two independent benchmarks -- LoCoMo and LongMemEval -- across eight answer generation models, demonstrating state-of-the-art performance on both.
   Benchmarks: LoCoMo, LongMemEval

68. **[Graph-Native Cognitive Memory for AI Agents: Formal Belief Revision Semantics for Versioned Memory Architectures](https://arxiv.org/abs/2603.17244)** · 2026-03 · relevance 9.5 · graph memory · method · assistants
   Kumiho presents a graph-native memory architecture with formal belief revision semantics for AI agents.
   > On LoCoMo (token-level F1), Kumiho achieves 0.565 overall F1 (n=1,986) including 97.5% adversarial refusal accuracy. On LoCoMo-Plus, a Level-2 cognitive memory benchmark testing implicit constraint recall, Kumiho achieves 93.3% judge accuracy (n=401); independent reproduction by the benchmark authors yielded results in the mid-80% range, still substantially outperforming all published baselines (best…
   Benchmarks: LoCoMo, LoCoMo-Plus

69. **[Chronos: Temporal-Aware Conversational Agents with Structured Event Retrieval for Long-Term Memory](https://arxiv.org/abs/2603.16862)** · 2026-03 · relevance 9.5 · retrieval memory · method · assistants
   Chronos enables conversational AI to remember and reason over time-evolving dialogue events with structured temporal indexing and retrieval.
   > Chronos Low achieves 92.60% and Chronos High scores 95.60% accuracy, setting a new state of the art with an improvement of 7.67% over the best prior system.
   Benchmarks: LongMemEvalS

70. **[SuperLocalMemory V3: Information-Geometric Foundations for Zero-LLM Enterprise Agent Memory](https://arxiv.org/abs/2603.14588)** · 2026-03 · relevance 9.5 · retrieval memory · method · assistants
   The paper establishes information-geometric, sheaf-theoretic, and stochastic-dynamical foundations for AI agent memory systems.
   > On the LoCoMo benchmark, the mathematical layers yield +12.7 percentage points over engineering baselines across six conversations, reaching +19.9 pp on the most challenging dialogues. A four-channel retrieval architecture achieves 75% accuracy without cloud dependency. Cloud-augmented results reach 87.7%. A zero-LLM configuration satisfies EU AI Act data sovereignty requirements by architectural design. To our knowledge, this is the first work establishing information-geometric, sheaf-theoretic, and stochastic-dynam…
   Benchmarks: LoCoMo

71. **[MSA: Memory Sparse Attention for Efficient End-to-End Memory Model Scaling to 100M Tokens](https://arxiv.org/abs/2603.23516)** · 2026-03 · relevance 9.5 · parametric memory · method · general
   MSA enables end-to-end trainable, efficient memory scaling to 100M tokens with linear complexity and 9% degradation.
   > MSA achieves linear complexity in both training and inference while maintaining exceptional stability, exhibiting less than 9% degradation when scaling from 16K to 100M tokens.

72. **[AMemGym: Interactive Memory Benchmarking for Assistants in Long-Horizon Conversations](https://arxiv.org/abs/2603.01966)** · 2026-03 · relevance 9.5 · tiered memory · benchmark · assistants
   AMemGym introduces an interactive environment for on-policy evaluation and optimization of memory in long-horizon conversations.
   > Extensive experiments reveal performance gaps in existing memory systems (e.g., RAG, long-context LLMs, and agentic memory) and corresponding reasons.

73. **[AMA-Bench: Evaluating Long-Horizon Memory for Agentic Applications](https://arxiv.org/abs/2602.22769)** · 2026-02 · relevance 9.5 · graph memory · benchmark · general
   AMA-Bench evaluates long-horizon memory in realistic agentic settings using real and synthetic agent trajectories.
   > AMA-Agent achieves 57.22% accuracy on AMA-Bench, outperforming the strongest baseline by 11.16%.$…
   Benchmarks: AMA-Bench

74. **[MemFit: Efficient Long-Term Agentic Memory](https://arxiv.org/abs/2610.00872)** · 2026-10 · relevance 9 · retrieval memory · method · assistants
   MemFit enables efficient, LLM-free long-term memory with fast insertion and retrieval for conversational agents.
   > Empirical results on three widely used benchmarks, LoCoMo, MemGallery, and LongMemEval-S, show that MemFit achieves state-of-the-art performance while reducing memory construction time and cost several-fold, providing a scalable and efficient solution for persistent agentic memory.
   Benchmarks: LoCoMo, MemGallery, LongMemEval-S

75. **[Mem++: Non-Destructive Memory for Long-Term Organizational LLM Agents](https://arxiv.org/abs/2610.02002)** · 2026-10 · relevance 9 · retrieval memory · method · assistants
   Mem++ enables long-term memory for LLM agents by storing full documents instead of distilling them at write time.
   > Evaluations on the organizational benchmark OrgMemBench demonstrate that Mem++ surpasses the strongest memory system baseline by 8.0 to 13.1 points across two answering models. With gpt-4.1-mini, it also achieves the best overall score, 2.6 points above RAG. In addition, Mem++ achieves the best average LLM-judge score on LoCoMo and ranks second on LongMemEval-S, behind only its entity-graph variant. Code for benchmark evaluation is available at https://github.com…
   Benchmarks: OrgMemBench, LoCoMo, LongMemEval-S

76. **[From Knowledge Access to Source Learning: Developing Source-Specific Competence](https://arxiv.org/abs/2610.02150)** · 2026-10 · relevance 9 · parametric memory · method · general
   The paper proposes SourceLearn to develop reusable, source-specific competence by progressively improving understanding of persistent external sources.
   > Across five benchmarks and three LLM backends, SourceLearn achieves the best performance in 13 of 15 settings, with gains of up to 22.6 points over Hybrid RAG and substantial overall improvements over static source representations and experience-based memory baselines.
   Benchmarks: three LLM backends

77. **[When Context Changes: Understanding Update Failures in LLMs](https://arxiv.org/abs/2609.38866)** · 2026-09 · relevance 9 · parametric memory · study · general
   The paper identifies and addresses stale binding in LLMs, where models fail to use updated information due to attention drift.
   > We find that in open-source models probes can still recover the updated value when the model answers with an old one, pointing to a failure to select information that remains available.
   Benchmarks: CICM

78. **[When Correct Memory Goes Wrong: Fuzzing Persistent Memory Use in LLM Agents](https://arxiv.org/abs/2609.38275)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   The paper proposes U-Fuzz to systematically discover memory-use failures in LLM agents by fuzzing queries and memory states.
   > U-Fuzz consistently uncovers more confirmed memory-use failures, showing that its search remains effective across different memory architectures and even when only final responses are observable.

79. **[Personalized State-Transition-Aware Memory for Clinical Agents](https://arxiv.org/abs/2609.38490)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   STAM introduces a memory framework that tracks clinical state changes and maintains relevant history for LLM agents in healthcare settings.
   > Across four longitudinal clinical benchmarks, we evaluate STAM with downstream question answering, direct state-maintenance diagnostics, and comparisons at approximately matched context lengths.

80. **[ATTUNER: Recomputation-Free KV Cache Reuse via Query-Side Adaptation](https://arxiv.org/abs/2609.36722)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   Attuner improves LLM memory reuse by adapting query projections without recomputation or full-context prefill.
   > Replacing PIC's attention scores with full-prefill scores recovers performance with the cached KV unchanged, localizing the failure to the attention rather than KV recomputation.
   Benchmarks: Qwen3-4B

81. **[Frontier Autolab: Organizational Memory, Adversarial Dissent and Temporal Leakage in Multi-Agent LLM Firms Across Fifty Years of Technological Change](https://arxiv.org/abs/2609.36739)** · 2026-09 · relevance 9 · summaries memory · study · multi-agent
   A multi-agent LLM firm simulates organizational memory and decision-making across 50 years of tech change, revealing a persistent gap between foresight and action.
   > Across four trajectories (36 era decisions, 180 subscores) we find a consistent foresight-commitment gap: in all 24 historically scored eras the judge rated the firm's recognition of the coming shift above its choice of where to build.

82. **[GitHarness: Git Init Your Harness Working Memory for Perpetual User Requirements](https://arxiv.org/abs/2609.36789)** · 2026-09 · relevance 9 · tiered memory · method · coding
   GitHarness uses a Git-style framework to track and update requirements dynamically in agentic workflows.
   > Experiments demonstrate strong task performance alongside effective requirement tracking, preservation of valid work, and efficient execution.
   Benchmarks: MTAgentBench

83. **[SkillCome: Group Contrast Skill Optimization with Dual Memory](https://arxiv.org/abs/2609.37128)** · 2026-09 · relevance 9 · unsure memory · method · general
   SkillCome uses group contrast and dual memory to improve LLM skills by analyzing multiple trajectories for reliable optimization signals.
   > SkillCome consistently outperforms baselines across five models of varying families and scales, with gains up to +5.69 points.

84. **[Share-Borne AI Virus: Memory-Hopping Attacks Across LLM Agents](https://arxiv.org/abs/2609.35576)** · 2026-09 · relevance 9 · retrieval memory · study · multi-agent
   The paper studies how adversarial content can spread across LLM agents via shared persistent artifacts.
   > In larger simulated environments, even GPT-5.6 Luna exhibits substantial spread, reaching 60-80% of agents with propagation chains extending to eight hops.

85. **[Self-Evolving Coding Agents: From Digital Programs to Physical-World Intelligence](https://arxiv.org/abs/2609.35432)** · 2026-09 · relevance 9 · parametric memory · method · robotics
   The paper proposes Physical Coding to enable robots to learn from physical experience through executable code traces that evolve over time.
   > On RoboCasa365, HexaAnything improves Composite-Unseen and overall success over XR-1 VLA, and its Harness-trained HexaModel beats the base on every split, indicating code traces internalize physical execution.
   Benchmarks: RoboCasa365, PhyBench, dual-arm AgileX robot

86. **[GenMem: Generative Symbolic Memory for Self-Evolving Harness](https://arxiv.org/abs/2609.34633)** · 2026-09 · relevance 9 · skills memory · method · general
   GenMem enables LLM agents to evolve long-term memory via generative symbolic addressing for stable, efficient retrieval and revision.
   > Under offline memory evolution, experiments spanning ALFWorld, WebShop, multi-hop QA, medical reasoning, and deep research evaluate GenMem against strong memory-augmented baselines...
   Benchmarks: ALFWorld, WebShop, multi-hop QA

87. **[Coding Agent Memory Post-training: Unlocking the Memory Potential of Pre-trained File Operations for Long-Horizon Tasks via Reinforcement Learning](https://arxiv.org/abs/2609.34422)** · 2026-09 · relevance 9 · retrieval memory · method · coding
   The paper trains language model agents to use file-based memory for long-horizon tasks via reinforcement learning in diverse agentic environments.
   > On SWE-bench Verified and MLE-bench Lite, CAMG-RL-4B and CAMG-RL-9B are competitive with Qwen3.5-35B-A3B and Qwen3.5-122B-A10B, respectively.
   Benchmarks: SWE-bench Verified, MLE-bench Lite

88. **[From Attack Success to Attack Severity: Counterfactual Memory Attacks on LLM Agents](https://arxiv.org/abs/2609.34132)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   The paper introduces counterfactual memory regret to measure the severity of memory attacks on LLM agents beyond simple success rates.
   > CMR-guided selection produces substantially larger downstream loss while retaining most of the success-rate gain.

89. **[Self-Designed Evaluators and Warm Memory for Long-Horizon Agents](https://arxiv.org/abs/2609.33717)** · 2026-09 · relevance 9 · unsure memory · method · general
   A language-model agent designs its own evaluators and uses warm memory to improve performance in long-horizon tasks without external rewards.
   > On matched five-repeat benchmarks over tau2-bench and AppWorld, SelfSuite scores above the plain agent without any labels, matches methods given ten expert labels on tau2-bench, and trails Agentic Context Engineering (ACE) on AppWorld, where code execution gives a direct success signal. In an ablation campaign run on the same tasks, it is above label-free ACE in every repeat, and the gated second attempt is the only component whose removal hurts in every repeat. We also simulate a subject-matter expert who grades ten…
   Benchmarks: tau2-bench, AppWorld

90. **[NLPG: Natural-Language Policy Gradients for Self-Evolving Language Agents](https://arxiv.org/abs/2609.33379)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   NLPG improves fixed language agents via natural-language policy updates without changing model parameters or program structure.
   > Across six benchmarks covering memory, reasoning, instruction following, and evidence verification, NLPG also outperforms the strongest listed baseline for each benchmark by 8.71 percentage points on average.

91. **[LSTMem: Hierarchical Long Short-Term Online Memory for Large Language Models](https://arxiv.org/abs/2609.33268)** · 2026-09 · relevance 9 · parametric memory · method · assistants
   LSTMem introduces a hierarchical, LSTM-inspired memory system that separates memory accumulation from expression in large language models.
   > Across memory benchmarks on Qwen3-4B-Instruct, LSTMem consistently improves MemoryAgentBench, LoCoMo, and HotpotQA over the plain backbone.
   Benchmarks: MemoryAgentBench, LoCoMo, HotpotQA

92. **[ECG-Scroll: A Long-Horizon, Streaming Benchmark and Agent Environment for Interpretation of Ambulatory Electrocardiograms](https://arxiv.org/abs/2609.33117)** · 2026-09 · relevance 9 · unsure memory · benchmark · science
   The paper introduces ECG-Scroll, a streaming benchmark and agent environment for long-horizon, online interpretation of ambulatory ECGs.
   > We release 390 whole-recording instances spanning 2,536 hours of two-lead ambulatory ECG and evaluate a signal-threshold rule agent alongside off-the-shelf LLM agents online, characterizing how they use memory, tools, and planning and where the benchmark's head-room lies.
   Benchmarks: ECG-Scroll

93. **[Contract Memory Compiler: Resolve, Then Traverse](https://arxiv.org/abs/2609.32658)** · 2026-09 · relevance 9 · retrieval memory · method · general
   The paper introduces a compiler that selects evidence before resolving updates to improve multi-hop question answering with external memory.
   > CMC achieves state-of-the-art multi-hop accuracy on FactConsolidation, reaching 78.25% overall and 61.0% at 262K.
   Benchmarks: FactConsolidation

94. **[BMA: Backchain Memory Attacks Create Unauthorized Control Paths in LLM Agents](https://arxiv.org/abs/2609.32186)** · 2026-09 · relevance 9 · retrieval memory · unsure · unsure
   BMA creates unauthorized control paths in LLM agents by manipulating memory to trigger protected actions without altering tasks or writing memory directly.
   > BMA achieves 18.8% Macro Path-CASR, compared with 13.4% for the strongest access-matched baseline. Of BMA's behavioral hits, 60.3% pass all registered pathway and intervention checks versus 36.7% for the baseline. Frozen BMA edits retain 78.0% of their certified effect on average across four held-out consolidation policies. Representative memory-side controls leave 11.0% Path-CASR, whereas provenance-bound authorization reduces it to…

95. **[Governed AI-Agent Coordination for Dementia Care: Architecture, Safety Contracts, and Evidence-Derived Workflow Verification](https://arxiv.org/abs/2609.25956)** · 2026-09 · relevance 9 · tiered memory · method · multi-agent
   The paper proposes GCAC, an architecture for safe, evidence-driven AI-agent coordination in dementia care with governance and workflow verification.
   > GCAC satisfies all 18 contract oracles with zero policy-violating tool calls and correctly preserves obligations, rejects stale state, creates human hand-offs, and records workflow closure.

96. **[MemCalib: Benchmarking and Optimizing Memory Use in LLM Agents](https://arxiv.org/abs/2609.24259)** · 2026-09 · relevance 9 · parametric memory · benchmark · unsure
   MemCalib introduces a benchmark and optimization method to improve how LLM agents use memory in context.
   > Results across model families and scales (Qwen3-8B, Ministral-3-8B-Instruct, and Qwen3.5-35B-A3B) show that MemCalib-RL achieves the best overall performance while better balancing over-use and under-use, with gains generalizing beyond MemCalib in external benchmark evaluation.
   Benchmarks: MemCalib

97. **[Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986)** · 2026-09 · relevance 9 · retrieval memory · method · general
   Jev-Mem introduces a System-One/Two-inspired memory system for faster, more efficient AI agent memory operations.
   Benchmarks: LoCoMo

98. **[PSD: Pseudo Self-Distillation of Memory Representation Capabilities for LLM Agents](https://arxiv.org/abs/2609.23449)** · 2026-09 · relevance 9 · parametric memory · method · unsure
   PSD enables small models to learn memory representations by distilling from a large oracle via prompts, reducing cost and improving efficiency for LLM agents.
   > On LoCoMo, PSD-trained Qwen3-0.6B, 1.7B, and 4B match or exceed GPT-4.1-mini on downstream retrieval at a fraction of the deployment cost, with off-policy PSD achieving the strongest results across most conditions.
   Benchmarks: LoCoMo, LongMemEval

99. **[AutoViewMem: Self-Configuring Orthogonal Views for Conversational Long-Term Memory](https://arxiv.org/abs/2609.21940)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   AutoViewMem creates self-configuring, low-overlap semantic views for conversational long-term memory to improve retrieval accuracy and personalization.
   > Experiments on the LoCoMo and PersonaMem benchmarks, under both Qwen3-8B and Qwen3-14B backbones, show that AutoViewMem improves long-horizon question answering and personalization over strong memory baselines while preserving a simple inference pipeline.
   Benchmarks: LoCoMo, PersonaMem

100. **[Self-Emergence Agent Architecture:Behavior-Inertia HMM, Reflexive Metacognition,and Social-Contrastive Self-Modeling](https://arxiv.org/abs/2609.17331)** · 2026-09 · relevance 9 · tiered memory · method · multi-agent
   SEAA introduces a self-emerging agent architecture with behavioral inertia, metacognition, and social contrastive modeling.
   > A language-model-free prototype shows the loop spontaneously breaks symmetry: initially identical agents consolidate distinct, stable personalities whereas matched controls do not.

101. **[Interactive Memory Learning for Long-Term Conversations](https://arxiv.org/abs/2609.17088)** · 2026-09 · relevance 9 · parametric memory · method · assistants
   ICML proposes an interactive memory framework that enables agents to learn and evolve memory policies through reinforcement learning for long-term conversations.
   > Experimental results demonstrate that ICML significantly outperforms strong baselines, exhibiting the unique capability to continuously improve response quality as interactions accumulate.

102. **[AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://arxiv.org/abs/2609.15457)** · 2026-09 · relevance 9 · tiered memory · method · web
   AnchorGUI uses asymmetric memory to improve GUI navigation through dual-scale learning with visual and textual evidence.
   Benchmarks: AndroidWorld

103. **[EMR: Self-Evolving Medical Multi-Agent System via Experience Mining and Reuse](https://arxiv.org/abs/2609.15161)** · 2026-09 · relevance 9 · retrieval memory · method · multi-agent
   EMR presents a self-evolving medical multi-agent system that learns from and reuses clinical experience for improved diagnosis.
   > Experiments on medical reasoning benchmarks demonstrate that EMR consistently outperforms state-of-the-art medical multi-agent baselines.

104. **[CoMem: Collective-Individual Memory Synergy for Evolutionary Multi-Agent Systems](https://arxiv.org/abs/2609.15009)** · 2026-09 · relevance 9 · retrieval memory · method · multi-agent
   CoMem introduces a collective-individual memory synergy framework for multi-agent systems to improve learning and avoid memory pollution.
   > Experiments on ALFWorld and PDDL benchmarks show that CoMem achieves strong overall performance and robustly avoids memory pollution.
   Benchmarks: ALFWorld, PDDL

105. **[MemRiskBench: Trace-Aware Risk-Preserving Evaluation for Long-Horizon LLM Agents](https://arxiv.org/abs/2609.14976)** · 2026-09 · relevance 9 · tiered memory · benchmark · unsure
   MemRiskBench evaluates LLM agents with trace-aware, risk-preserving benchmarks that detect rare but severe memory risks.
   > Second, a risk-preserving subset selector: a coverage-constrained greedy selector on deterministic trace-derived features that retains full ranking (Spearman rho = 0.975, deterministic; CI collapses to a point estimate with zero bootstrap variance), risk coverage (1.0), and high-risk model detection (1.0) at a 20% subset size, reducing compute 5x.
   Benchmarks: MemRiskBench

106. **[LifeMem: Enabling Lifelong Experience Reuse for LLM Agents](https://arxiv.org/abs/2609.12655)** · 2026-09 · relevance 9 · retrieval memory · method · general
   LifeMem enables LLM agents to reuse past experience across environments while reducing catastrophic forgetting.
   > Results show that LifeMem enables effective experience reuse in lifelong learning, achieving both reduced forgetting on learned tasks and superior cross-task transfer.

107. **[CueMem: Cue-Guided Context Reconstruction for Long-Term Conversational Memory](https://arxiv.org/abs/2609.12354)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   CueMem uses cue-guided context reconstruction to improve long-term conversational memory by linking memory cues to source turns and reconstructing context from dialogue history efficiently and accurately.
   > Experiments on LoCoMo and LongMemEval show that CueMem consistently outperforms representative long-term memory baselines. Further analyses show that graph-based context reconstruction helps recover supporting dialogue evidence while reducing query-time input tokens and latency compared with the full-history LLM setting. These results highlight retrieval cues as an effective alternative to self-contained memory evidence for long-term conversational question answering.
   Benchmarks: LoCoMo, LongMemEval

108. **[AIM: A Privacy-Aware Interoperable Memory Framework for Multi-Agent Multi-User LLM Systems](https://arxiv.org/abs/2609.12320)** · 2026-09 · relevance 9 · retrieval memory · method · multi-agent
   AIM enables multi-agent, multi-user LLM systems to manage private and shared memory with privacy-aware access controls.
   > Across three independent runs on MUMBench, AIM achieves 96.0% visibility classification accuracy, 58.8% strict operation accuracy, and 70.5% state-aware operation accuracy.
   Benchmarks: MUMBench

109. **[But How Would AI Agents Run a Town's Economy?](https://arxiv.org/abs/2609.11108)** · 2026-09 · relevance 9 · retrieval memory · study · multi-agent
   AI agents manage a simulated town economy, showing money stops moving and wealth distribution stabilizes over time.

110. **[Not All Memories Are Equal: Hierarchical Collaborative Memory for Validity-Aware Retrieval in LLM Agents](https://arxiv.org/abs/2609.30289)** · 2026-09 · relevance 9 · tiered memory · method · multi-agent
   HiCoMER proposes a framework for hierarchical collaborative memory management with validity-aware retrieval in LLM agents.
   > Experiments on both datasets show that HiCoMER consistently outperforms strong baselines by reducing outdated retrieval, preserving current team consensus, and improving downstream QA quality.

111. **[What Should an Agent Forget? Separating What Is Stored from What Is Used](https://arxiv.org/abs/2609.10263)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   The paper introduces RD-Forget, a framework that separates stored memory from used memory in language agents.
   > The results associate accurate answers with both query-relevant evidence construction and control over obsolete alternatives.

112. **[Multi-Agent Agentic Graph Learning via Structural Signatures](https://arxiv.org/abs/2609.09565)** · 2026-09 · relevance 9 · graph memory · method · multi-agent
   MAAGL introduces a multi-agent framework that partitions graphs into communities and assigns agents to each for specialized, permutation-invariant reasoning over structural and semantic evidence.
   > Extensive experiments on four benchmark datasets show that MAAGL outperforms SOTA AGL methods.

113. **[Graph-Based Personalized Memory for LLM Agents: Representation, Evolution, Retrieval, and Evaluation](https://arxiv.org/abs/2609.08599)** · 2026-09 · relevance 9 · graph memory · survey · assistants
   This survey organizes graph-based personalized memory for LLM agents across representation, evolution, retrieval, and evaluation.
   > This survey aims to clarify how graph-based memory can support adaptive, controllable, and user-centric LLM agents.

114. **[BIO-MEMART: Biometric-Aware KV Cache Memory for Multi-User LLM Agents](https://arxiv.org/abs/2609.08566)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   Bio-MemArt adds biometric access control to shared KV cache memory in multi-user LLM agents.
   > Across face benchmarks, the average owner and non-owner biometric success rates are 95.71% and 0.86%; across palmprint benchmarks, they are 97.60% and 2.00%. In the efficiency study, average prefill tokens drop from 18,781.96 under full-context prompting to 28.57 with Bio-MemArt, showing that biometric gating preserves the low-token operating regime of KV-cache memory.

115. **[CreaMem: A Scene-Aware Memory Architecture for Personalized Agents](https://arxiv.org/abs/2609.08550)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   CreaMem proposes a scene-aware memory architecture with dual-coded memories for better personalization and retrieval in agents.
   > Extensive experiments on two long-term memory benchmarks show that CreaMem improves QA accuracy across all evaluation metrics, with particularly large gains on multi-hop reasoning performance, validating scene-aware partitioning and cross-memory synergy.

116. **[MEMO: Multimodal Evidence Memory Organization for Long-Horizon LLM Agents](https://arxiv.org/abs/2609.07471)** · 2026-09 · relevance 9 · tiered memory · method · general
   MEMO organizes memory using textual, visual, or dual modalities to improve efficiency and performance in LLM agents with limited context capacity.
   > The results show that MEMO presents memory more efficiently with fewer memory tokens, improves downstream task performance, and builds more effective working memory under constrained budgets.
   Benchmarks: HotpotQA, LoCoMo, ALFWorld

117. **[KVMem: Virtualizing Million-Token Agent Workspaces on a Consumer GPU](https://arxiv.org/abs/2609.04852)** · 2026-09 · relevance 9 · retrieval memory · method · coding
   KVMem virtualizes million-token agent workspaces using paged KV state across GPU and host memory.
   > In the DeepSWE long-context test with Qwen3.8-27B, KVMem improves task success from 43.8% with compaction-only context management to 48.4%.$…
   Benchmarks: LongMemEval, MemoryAgentBench, AgentLongBench, DeepSWE

118. **[Bioinfoysis Technical Report](https://arxiv.org/abs/2609.03871)** · 2026-09 · relevance 9 · retrieval memory · tool · science
   Bioinfoysis introduces a multi-agent system for bioinformatics with persistent, evidence-grounded planning and execution.
   Benchmarks: BixBench, SeqQA2, DbQA2

119. **[EvalMem: An Operation-Level Diagnostic Framework for Long-Term Memory Systems](https://arxiv.org/abs/2609.22231)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   EvalMem introduces an operation-level diagnostic framework to identify failure sources in long-term memory systems by examining encoding, retrieval, and generation steps.
   > Evaluations of seven memory systems on LoCoMo, LongMemEval-S, and dynamic DynaMem-Bench identify retrieval as the most frequently attributed failure layer; in default LoCoMo, retrieval defects reach 22.1%, compared with 7.7% for encoding and 6.5% for generation.
   Benchmarks: LoCoMo, LongMemEval-S, dynamic DynaMem-Bench

120. **[Fresh Memory, Stale Plans: Derivation Currency for Distributed LLM-Agent Memory](https://arxiv.org/abs/2609.03340)** · 2026-09 · relevance 9 · retrieval memory · method · multi-agent
   The paper introduces Planfence to detect stale plans by checking input derivation currency in LLM agent systems.
   > In 30 live five-agent workflows with a revision inserted after planning, a freshness-only executor acts on the stale plan every time, whereas Planfence, like a centralized-lineage baseline that requires a shared store, completes all 30 correctly.

121. **[MemoryLACE: Memory Lifecycle-Aware Consolidation and Evidence Retrieval](https://arxiv.org/abs/2609.03201)** · 2026-09 · relevance 9 · retrieval memory · method · assistants
   MemoryLACE models textual evidence lifecycle to improve long-term memory reasoning without global graphs or reflection.
   > Across BEAM and StructMemEval, using open-weight and proprietary LLM backbones, MemLACE achieves the highest overall performance in same-backbone comparisons while reducing end-to-end runtime on BEAM by 66.6% relative to Hindsight, the strongest reported reflective-memory baseline.
   Benchmarks: BEAM, StructMemEval

122. **[Bilevel Coordinated Reflection: A Game-Theoretic Approach to Multi-Agent LLM Systems](https://arxiv.org/abs/2609.02750)** · 2026-09 · relevance 9 · tiered memory · method · multi-agent
   The paper proposes a game-theoretic framework for multi-agent LLM systems with grounded memory improvement and provable convergence guarantees.
   > We further prove an information-theoretic impossibility result: no gate that observes only the generated transcript can improve uniformly over text-indistinguishable environments, whereas an environment-grounded gate can.

123. **[Agent Memory Is a Surface for Endogenous Authorization Laundering](https://arxiv.org/abs/2609.01836)** · 2026-09 · relevance 9 · retrieval memory · unsure · assistants
   The paper identifies and measures how LLM agent memory can falsely grant permissions, leading to unauthorized actions despite no prior authorization.
   > We find that under incremental memory updates, writers create false authority for up to 50.2% of unauthorized requests; once false authority is present, executors act on it in 98.6% of trials.

124. **[Transferable End-to-End Optimization for Indirect Long-Term Memory Poisoning in LLM Agents](https://arxiv.org/abs/2609.00523)** · 2026-09 · relevance 9 · retrieval memory · unsure · assistants
   The paper proposes PipePoison, an end-to-end method for attacking LLM agents via indirect long-term memory poisoning.

125. **[Memory as Infrastructure: Reliability Engineering for Persistent Agent Memory in Months-Long LLM-Assisted Development](https://arxiv.org/abs/2609.05510)** · 2026-08 · relevance 9 · retrieval memory · tool · coding
   The paper presents SIx Harness, an open-source memory infrastructure with reliability engineering for LLM agents in months-long development projects.
   > 78,933 hook invocations; 85 recorded failures, none silent: 84 in the subsystem's first three weeks, one since, none in the final 20 days; an injection layer whose ten-day precision instrument shows zero false fires against an intact denominator; and three production incidents traced from instrument reading to structural fix.

126. **[Understanding Stage-Wise Utility-Risk Trade-offs in LLM Agent Memory](https://arxiv.org/abs/2608.30177)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   The paper introduces MemGauge to evaluate stage-wise utility-risk trade-offs in LLM agent memory across different operations and systems.
   > controlled evaluations reveal three distinct profiles: a threshold-like risk transition during writing, policy-dependent local decoupling during management, and coupled growth of utility and risk during retrieval.

127. **[AgenticRag-R1: Agentic Reinforcement Learning with Stack Memory for Multi-Step Reasoning, Retrieval and Memorizing](https://arxiv.org/abs/2608.29622)** · 2026-08 · relevance 9 · tiered memory · method · assistants
   AgenticRag-R1 uses fine-grained actions and memory stacks to enable long-horizon, multi-step reasoning in RAG systems.
   > Experiments across a diverse set of multi-hop, open-domain, and agentic reasoning benchmarks, spanning multiple backbone model sizes, demonstrate that AgenticRag-R1 consistently outperforms strong baselines. Moreover, AgenticRag-R1 learns more robust, interpretable, and memory-aware reasoning behaviors, highlighting the effect of fine-grained action modeling and information-aware optimization for long-horizon reasoning.

128. **[Hindsight Memory-PRM: Supervising Memory Management with Auditable Hindsight Credit](https://arxiv.org/abs/2608.29605)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   Hindsight Memory-PRM trains and supervises LLM agent memory using audit trails without human labels or Monte-Carlo replay.
   > On held-out LoCoMo a local 8B policy reaches 77.5% under a fixed shared reader, surpassing its API teacher (65.1%) and all reproduced external systems, at one eighth the context of Mem0's official operating point; on LongMemEval, 79.0%.$…
   Benchmarks: LoCoMo, LongMemEval

129. **[When Memory Takes Gradients: Collaborative Vector Memory for Agentic Recommender Systems](https://arxiv.org/abs/2608.26895)** · 2026-08 · relevance 9 · graph memory · method · assistants
   CoVeMem vectorizes collaborative memory for agentic recommenders, enabling gradient-based learning from full interaction histories without extra LLM calls.
   > Across four instruction-grounded recommendation benchmarks, CoVeMem matches or exceeds the strongest collaborative text-memory agent on 19 of 20 metric cells while requiring zero additional LLM calls for memory maintenance beyond the shared static profile, against per-interaction calls for text memory.

130. **[LiveSim: Simulating Environment-Shaped Users in Multi-Agent Live-Stream Ecosystems](https://arxiv.org/abs/2608.26849)** · 2026-08 · relevance 9 · retrieval memory · method · multi-agent
   LiveSim uses LLMs to simulate live-stream users with evolving behavioral hypotheses based on real-time interactions and environmental feedback.
   > Experiments on real-world live-stream risk-control data validate the effectiveness of LiveSim in improving user-level behavioral fidelity and enabling ecosystem-level analysis of risk evolution and platform intervention effects.

131. **[PolyMemDB: A Polyglot Database System for AI Memory Management](https://arxiv.org/abs/2608.25577)** · 2026-08 · relevance 9 · retrieval memory · tool · assistants
   PolyMemDB introduces a polyglot database system with probabilistic inference to manage diverse memory types and resolve factual conflicts in AI agents.
   > It features a probabilistic inference engine that integrates temporal decay with semiring aggregation, resolving long-term factual conflicts, providing detailed data provenance, and enabling users to trace reasoning chains transparently.

132. **[When Stale Constraints Go Unchecked: Budgeted Verification Failures in Inherited Agent Memory](https://arxiv.org/abs/2608.25553)** · 2026-08 · relevance 9 · retrieval memory · study · general
   The paper studies how agents fail to re-verify stale memory constraints and proposes remedies to improve decision accuracy under limited verification budgets.
   > Re-assigning one of the same two slots to the critical path removed most of them: +74.0, +72.7 and +61.3 points (positive in every model), +80.7 in a prospectively frozen interleaved replication with a repaired non-critical control, and +62.0 on a panel of 10 models from 9 organisations; a corrected re-run of the held-out scenario gave +73.3.

133. **[CaSKG: Counterfactual-Causal Skill Graphs for Scalable Agent Skill Retrieval](https://arxiv.org/abs/2608.25500)** · 2026-08 · relevance 9 · retrieval memory · method · games
   CaSKG uses counterfactual-causal skill graphs to improve scalable and accurate skill retrieval in LLM agents.
   Benchmarks: ALFWorld ID-140, ScienceWorld U211

134. **[InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](https://arxiv.org/abs/2608.23471)** · 2026-08 · relevance 9 · retrieval memory · unsure · assistants
   The paper proposes InjecMEM, a memory injection attack that steers LLM agent responses via a single interaction without read/edit access to memory store.
   > Evaluated across multiple memory systems and backbone models, InjecMEM achieves reliable topic-conditioned retrieval and targeted generation, remains effective under memory drift, and leaves non-target queries unaffected.

135. **[The Compaction Cliff in Long-Running AI Agent Memory](https://arxiv.org/abs/2608.22752)** · 2026-08 · relevance 9 · retrieval memory · method · coding
   The paper introduces Knowledge Triage to preserve safety rules in AI agent memory during compaction.

136. **[When Not to Imitate: Boundary-Aware Skill Memory for Reliable Tool-Use LLM Agents](https://arxiv.org/abs/2608.22339)** · 2026-08 · relevance 9 · skills memory · method · unsure
   BASM adds boundary fields to skills to prevent incorrect tool use in LLM agents.
   > Across three agent benchmarks and four model scales, BASM consistently outperforms success-distilled skill-memory baselines: it improves task success rate by up to $23.8%$ on AppWorld, accuracy by up to $5.0%$ on BFCL, and reduces attack success rate by $4.6%$ on AgentDojo, while simultaneously reducing average AppWorld steps by up to $6.6%$ relative to the memory-free baseline.
   Benchmarks: AppWorld, BFCL, AgentDojo

137. **[HERO: Human-profile Enhanced Retrieval Optimization Framework for Long-term Agent Memory](https://arxiv.org/abs/2608.22310)** · 2026-08 · relevance 9 · graph memory · method · assistants
   HERO preserves raw dialogue text and uses human profiles to improve long-term memory retrieval with better fidelity and personalization.
   > Experiments on two benchmark datasets show that HERO outperforms strong baselines on both factual and personalized reasoning, while providing more faithful access to raw dialogue evidence.

138. **[Dual-Layer Agentic Memory with Fast Write Routing and Slow Consolidation](https://arxiv.org/abs/2608.22215)** · 2026-08 · relevance 9 · parametric memory · method · general
   The paper proposes a dual-layer memory system that selectively externalizes and consolidates knowledge to improve efficiency and retention in LLM agents.
   > a 1.7B/8B cascade prunes up to 68% of redundant external memory while escalating fewer than 50% of inputs, yet retains over 98% of the downstream QA Exact Match (EM) achieved by an exhaustive retention baseline.

139. **[Context as an Environment: Programmatic Context Management for Long-Horizon Agents](https://arxiv.org/abs/2608.21690)** · 2026-08 · relevance 9 · tiered memory · tool · coding
   Scroll presents a programming-based context manager for long-horizon agents using an event log and persistent Python kernel.
   > With Qwen3.8-Max as the backbone, Scroll achieves 94.8% on LongMemEval\_S; 73.1% on BEAM\_10M, surpassing the best published memory system by 5.1 points; and 86.7% on LOCA\_256K, exceeding the best published long-horizon agent by 37.4 points.
   Benchmarks: LongMemEval\_S, BEAM\_10M, LOCA\_256K

140. **[Can Agent Memory Systems Track Evolving State?](https://arxiv.org/abs/2608.19652)** · 2026-08 · relevance 9 · tiered memory · method · assistants
   The paper introduces StateMemBench and StateMem to enable LLM agents to track evolving world states over time.
   Benchmarks: StateMemBench

141. **[Success Leaves Detours: Learning Executable Walkthroughs for Long-Horizon Agents](https://arxiv.org/abs/2609.22120)** · 2026-08 · relevance 9 · skills memory · method · general
   The paper extracts executable, state-conditioned procedures from sparse-reward trajectories for long-horizon agents.
   > Experiments on J-TTL, WebShop, and ScienceWorld with three open-source LLMs show that Trace consistently outperforms eight test-time learning and memory baselines. Compared with the strongest baseline, it improves average AUC and Final-$3$ by $30.0%$ and $40.5%$, respectively, while using fewer inference tokens.
   Benchmarks: J-TTL, WebShop, ScienceWorld

142. **[rEDMRec: Distilling Large Language Model Reasoning into an Editable Experience Memory for Recommendation](https://arxiv.org/abs/2608.18952)** · 2026-08 · relevance 9 · tiered memory · method · assistants
   rEDMRec distills LLM reasoning into editable memory channels for efficient, reusable recommendation inference.
   > Across ML-1M, Amazon Beauty, and Steam and ten student backbones, rEDMRec improves HR@1 over zero-shot, few-shot, and RAG on every backbone, and over GraphRAG on most backbones, with Impv up to 13.3% vs. the second-best baseline on ML-1M. Channel ablations show that short-term context is the only channel that helps consistently across capacity tiers, whereas long-term, item-perception, and counterfactual contributions are capacity-dependent (and can…
   Benchmarks: ML-1M, Amazon Beauty, Steam

143. **[MemFuse: Multi-Source Memory Fusion from Fragmented Observations](https://arxiv.org/abs/2608.18704)** · 2026-08 · relevance 9 · graph memory · method · assistants
   The paper introduces MemFuse, a memory system that fuses fragmented, multi-source observations into coherent episodic memories while preserving source provenance.
   > Experiments on MemFuseBench show that MemFuse achieves the best overall performance among the evaluated memory systems under all three LLM settings and consistently improves performance on questions requiring cross-source evidence fusion.
   Benchmarks: MemFuseBench

144. **[PILOT Technical Report](https://arxiv.org/abs/2608.18637)** · 2026-08 · relevance 9 · retrieval memory · method · general
   PILOT uses an LLM-agent framework to proactively design experiments and personalize strategies for recommendation systems.
   > PILOT achieves up to +1.40% IPV, +1.60% Core IPV, +0.96% transaction count, and +1.50% transaction amount, improving over ROAM's best results (+1.00% IPV, +0.90% Core IPV, +0.60% transaction count, +1.13% transaction amount) while raising search efficiency from 53.3% to 93.3% (+40 pp), with no human intervention…

145. **[CABLE: Extending the Reach of Memory Retrieval via Complementary Antecedent-Based Linking and Expansion](https://arxiv.org/abs/2608.17911)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   CABLE extends memory retrieval by adding complementary, non-semantic links to surface hidden evidence across sessions and memories.
   > CABLE yields higher mean LLM-judge scores in every evaluated system-level setting, with the largest gains in categories where useful evidence is distributed across memories or sessions, including open-domain, multi-session, and preference-oriented questions.
   Benchmarks: LoCoMo, MA-LongMemEval

146. **[D$^2$ACCI: A Dual-Loop Diagnostic Protocol for Evidence-Preserving Agent Memory](https://arxiv.org/abs/2608.17756)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   D$^2$ACCI provides a diagnostic protocol for traceable, stage-level error localization in agent memory systems.
   > Five paired ablations show that supplement extraction, session-memory retrieval, and Forget Guard yield statistically significant gains (+1.9 to +3.7pp, all p $leq$ .003).
   Benchmarks: LoCoMo, LongMemEval, PersonaMem-V2

147. **[GraphWake: Group Polarization via Memory-Mediated Polarization Cascade in LLM-Agent Communities](https://arxiv.org/abs/2608.17665)** · 2026-08 · relevance 9 · graph memory · method · multi-agent
   The paper introduces GraphWake, a method that induces group polarization in LLM-agent communities via memory-mediated cascades.
   > Experiments across multiple discussions and memory systems show that GraphWake substantially increases group polarization.

148. **[Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory](https://arxiv.org/abs/2608.16889)** · 2026-08 · relevance 9 · retrieval memory · method · robotics
   BATON enables long-horizon robot manipulation through agentic subtask exploration and transition-aware memory.
   > On the long-horizon benchmark RoboMemArena, BATON improves task success by 11.6% and cumulative success by 14.9% over the SoTA.
   Benchmarks: RoboMemArena

149. **[What to Remember, What to Reveal: Privacy-Aware Memory for Conversational Agents](https://arxiv.org/abs/2608.16551)** · 2026-08 · relevance 9 · retrieval memory · method · assistants
   The paper introduces SP-Mem, a privacy-aware memory architecture that separates sensitive data to reduce unnecessary privacy exposure in conversational agents.
   > Extensive experiments across multiple LLM-based agents show that SP-Mem achieves stronger personalization while reducing unnecessary privacy exposure.

150. **[QUMem: Personalized Memory for Query-Conditioned User-State Inference in LLM Agents](https://arxiv.org/abs/2608.16168)** · 2026-08 · relevance 9 · tiered memory · method · assistants
   QUMem introduces a structured memory framework for query-conditioned user-state inference in LLM agents.
   > QUMem achieves state-of-the-art performance on both PersonaMem and KnowU-Bench…
   Benchmarks: PersonaMem, KnowU-Bench
