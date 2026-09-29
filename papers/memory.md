# Agent memory: the most relevant papers so far

The 10 highest-scoring of the 21 papers read so far that score 8.5 or more for relevance to agent memory. Every one of them is in [memory.csv](memory.csv), with its notes. Scores and labels are the model's readings of the title and abstract; quoted lines are copied from the abstract and checked.

1. **[Remember Before You're Asked: MemDream for Self-Probing Memory Evolution](https://arxiv.org/abs/2609.34545)** · 2026-09 · relevance 9.5 · graph memory · method · assistants
   MemDream enables LLM agents to proactively probe and repair memory before failures occur.
   > Experiments on LoCoMo and MemoryAgentBench demonstrate that MemDream improves answer F1 by 4.5 points on LoCoMo and achieves a 9.1-point higher overall score on MAB over the strongest reactive-evolution baselines.
   Benchmarks: LoCoMo, MemoryAgentBench

2. **[Remember by Asking: Retrieval-Induced Memory Evolution for LLM Agents](https://arxiv.org/abs/2609.34438)** · 2026-09 · relevance 9.5 · retrieval memory · method · assistants
   RIME improves LLM agent memory by evolving it through retrieval-induced evidence integration instead of monolithic compression.
   > Extensive experiments on LoCoMo with Qwen3-235B-A22B and GPT-5.6 Sol show that RIME consistently achieves the best performance across all three quality metrics among the compared methods, while requiring substantially fewer query-time LLM tokens.
   Benchmarks: LoCoMo

3. **[Share-Borne AI Virus: Memory-Hopping Attacks Across LLM Agents](https://arxiv.org/abs/2609.35576)** · 2026-09 · relevance 9 · retrieval memory · study · multi-agent
   The paper studies how adversarial content can spread across LLM agents via shared persistent artifacts.
   > In larger simulated environments, even GPT-5.6 Luna exhibits substantial spread, reaching 60-80% of agents with propagation chains extending to eight hops.

4. **[Self-Evolving Coding Agents: From Digital Programs to Physical-World Intelligence](https://arxiv.org/abs/2609.35432)** · 2026-09 · relevance 9 · parametric memory · method · robotics
   The paper proposes Physical Coding to enable robots to learn from physical experience through executable code traces that evolve over time.
   > On RoboCasa365, HexaAnything improves Composite-Unseen and overall success over XR-1 VLA, and its Harness-trained HexaModel beats the base on every split, indicating code traces internalize physical execution.
   Benchmarks: RoboCasa365, PhyBench, dual-arm AgileX robot

5. **[GenMem: Generative Symbolic Memory for Self-Evolving Harness](https://arxiv.org/abs/2609.34633)** · 2026-09 · relevance 9 · skills memory · method · general
   GenMem enables LLM agents to evolve long-term memory via generative symbolic addressing for stable, efficient retrieval and revision.
   > Under offline memory evolution, experiments spanning ALFWorld, WebShop, multi-hop QA, medical reasoning, and deep research evaluate GenMem against strong memory-augmented baselines...
   Benchmarks: ALFWorld, WebShop, multi-hop QA

6. **[From Experience to Expertise: Adoption-Aware Memory Learning for Data-Scarce NPU Kernel Synthesis](https://arxiv.org/abs/2609.35568)** · 2026-09 · relevance 8.5 · retrieval memory · method · coding
   SAGE uses adoption-aware credit assignment and selective consolidation to improve NPU kernel synthesis in data-scarce settings.
   > On NPUKernelBench, SAGE achieves a 95.5% execution rate versus 84.1% for the strongest controlled baseline, with 86.9% of solved operators outperforming torch\_npu. With GLM-5.3, SAGE achieves a 43.99x speedup over the torch\_npu reference on sparse flash attention.
   Benchmarks: NPUKernelBench

7. **[Continuous Context Management](https://arxiv.org/abs/2609.35540)** · 2026-09 · relevance 8.5 · summaries memory · method · general
   CCM compacts LLM agent memory continuously to reduce prompt size and input usage while improving performance with reinforcement learning guidance.
   > On WebShop, this objective substantially improves CCM over GRPO at both evaluated model scales and surpasses full-history GRPO for Qwen3-4B-Instruct, though not for Qwen3-8B. On Endless Terminals, the augmented method provides a modest improvement over GRPO, with both CCM policies outperforming the untrained full-history baseline. These results demonstrate that CCM is a viable inference paradigm for agents operating with substantially reduced retained context and that its performance can be improved through reinforcement…
   Benchmarks: WebShop, Endless Terminals

8. **[Sprout: Building Dynamic Memory While Reasoning for Agentic Video Understanding](https://arxiv.org/abs/2609.35497)** · 2026-09 · relevance 8.5 · graph memory · method · general
   Sprout builds dynamic memory while reasoning for agentic video understanding, updating memory online as questions are answered.
   > Across benchmarks on three models, Sprout achieves competitive or improved accuracy relative to representative offline memory methods, with no upfront construction stage and lower context cost per question.

9. **[EP-Mem: Elastic Privacy Memory for Social Relationship-Aware LLM Agents](https://arxiv.org/abs/2609.35233)** · 2026-09 · relevance 8.5 · tiered memory · method · assistants
   EP-Mem enables LLM agents to respect long-term social relationship boundaries through user-controlled privacy policies and dynamic disclosure controls.
   > Experiments show that EP-Mem achieves 94.0% privacy classification accuracy, improves disclosure-permission judgment from 22% to 68%, and reduces privacy leakage by 75.6%, while maintaining retrieval performance and cross-benchmark generalization.
   Benchmarks: EP-Bench

10. **[FlowState: Execution State as Memory for Long-Horizon LLM Agents](https://arxiv.org/abs/2609.34565)** · 2026-09 · relevance 8.5 · graph memory · method · assistants
   FlowState uses execution state as memory to improve long-horizon LLM agent performance and efficiency by retaining and revising historical information dynamically.
   > Compared with a full-context baseline using the same DeepSeek-V4-Flash model, FlowState improves the average success rate on MemoryArena and the average pass rate on $tau^3$-Bench by 4.55 and 13.95 percentage points, respectively, while reducing total token consumption by 43.2% and 40.6%..
   Benchmarks: MemoryArena, $tau^3$-Bench
