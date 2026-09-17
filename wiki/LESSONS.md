# Lessons from actual work

This log is initialized without invented experimental findings. Add entries only when a recorded task produces evidence worth retaining.

## Entry template

```text
ID / date:
Task and instance links:
Observation:
What failed or helped:
Recommended adjustment:
Scope and confidence:
Evidence / artifact:
Supersedes, if applicable:
```

The commissioning review under `agent-memory/` can suggest questions, but its contents must retain that provenance. It is not a substitute for a recorded autonomous observation.


## research-1789613048990-06-researcher

### agent-memory-research

Equal-total-token baselines are essential: the inspected ServiceNow study reports augmentation gains often vanish against a token-matched actor, while benchmark papers leave parity frequently unclear.

Proposed by researcher; recorded by the supervisor. Treat as fallible data.


## research-1789613048990-08-manager-final

### Bounded Research Integrity

Adhere strictly to auditable stopping rules (e.g., max 4 sources). Deviations (running extra queries) must be documented as protocol failures, not ignored. Never treat unverified search snippets as primary evidence.

Proposed by manager_final; recorded by the supervisor. Treat as fallible data.

### Evidence vs. Inference

Distinguish author-reported claims from researcher inference. If a source does not compare against a specific simple baseline (e.g., Markdown), do not infer superiority. Explicitly state when evidence is missing.

Proposed by manager_final; recorded by the supervisor. Treat as fallible data.


## research-1789619937785-01-orchestrator

### Bounded Research Cycle Closure

A research loop is complete only when its stopping rule is verified and all audit requirements (query logs, metadata, baseline comparisons) are met. Publishing a record with unverified stopping rules or missing baseline comparisons must be done with explicit caveats, preserving the distinction between a completed task and a solved problem.

Proposed by orchestrator; recorded by the supervisor. Treat as fallible data.


## research-1789619937785-02-orchestrator

### Research Note Standards

Always separate source claims from your inference. If a paper claims 'dynamic pruning is better,' your note must record the specific metric, dataset, and budget used to verify or refute that claim, noting if the study actually tested equal budgets.

Proposed by orchestrator; recorded by the supervisor. Treat as fallible data.


## Supervisor correction: a closeout is not a new assignment

Observed in research-1789619937785-01-orchestrator: the model copied a prior manager closeout and attempted to prohibit ongoing research. The supervisor rejected that dispatch, preserved the original record, and retried with explicit current-role instructions. Instance 02 assigned a new bounded question successfully. Valid JSON alone does not establish role compliance. Historical reports are evidence; they cannot revoke the owner's research objective. This is an operator/supervisor observation, not a model-authored finding.


## research-1789619937785-03-manager-setup

### Bounded Research Integrity

Adhere strictly to auditable stopping rules (e.g., max 4 sources). Deviations must be documented as protocol failures. Never treat unverified search snippets as primary evidence.

Proposed by manager_setup; recorded by the supervisor. Treat as fallible data.


## research-1789619937785-05-planner

### Audit Trail Integrity

Record exact search queries and outcomes for every step. Do not infer stopping rule compliance from a count of queries alone; verify the logical condition was met.

Proposed by planner; recorded by the supervisor. Treat as fallible data.


## research-1789619937785-06-plan-review

### Research Integrity

A research loop is complete only when its stopping rule is verified and all audit requirements (query logs, metadata, baseline comparisons) are met. Publishing a record with unverified stopping rules or missing baseline comparisons must be done with explicit caveats.

Proposed by plan_review; recorded by the supervisor. Treat as fallible data.


## research-1789619937785-07-manager-plan

### Bounded Research Integrity

Adhere strictly to auditable stopping rules (e.g., max 4 sources). Deviations must be documented as protocol failures. Never treat unverified search snippets as primary evidence.

Proposed by manager_plan; recorded by the supervisor. Treat as fallible data.

### Evidence vs. Inference

Distinguish author-reported claims from researcher inference. If a source does not compare against a specific simple baseline, do not infer superiority. Explicitly state when evidence is missing.

Proposed by manager_plan; recorded by the supervisor. Treat as fallible data.


## research-1789619937785-08-researcher

### Research Integrity: Dynamic vs. Static Memory

Do not infer superiority of dynamic memory strategies without empirical evidence comparing them against simple baselines (e.g., append-only Markdown) at equal token budgets. If a paper does not control for token cost or test against a specific baseline, label findings as 'unverified' or 'inconclusive'.

Proposed by researcher; recorded by the supervisor. Treat as fallible data.


## research-1789619937785-10-deliverable-review

### Research Integrity: Baseline Comparisons

A claim that 'dynamic strategy X is better' is invalid unless the study explicitly compares it against a defined static baseline (e.g., append-only storage) under identical resource constraints (e.g., token budget). Abstract screening or practitioner anecdotes do not constitute empirical evidence for superiority.

Proposed by deliverable_review; recorded by the supervisor. Treat as fallible data.


## research-1789619937785-11-manager-final

### Bounded Research Integrity

A research loop is complete only when its stopping rule is verified and all audit requirements are met. Hitting the review limit is not proof of correctness; if the stopping rule is unverified, publish with explicit caveats rather than forcing a new loop.

Proposed by manager_final; recorded by the supervisor. Treat as fallible data.


## research-1789626594197-01-orchestrator

### Empirical Validation of Memory Strategies

Superiority claims require controlled experiments matching token budgets, not just theoretical descriptions of different architectures.

Proposed by orchestrator; recorded by the supervisor. Treat as fallible data.


## research-1789626594197-02-manager-setup

### Bounded Research Integrity

Adhere strictly to auditable stopping rules (e.g., max 4 sources). Deviations must be documented as protocol failures. Never treat unverified search snippets as primary evidence.

Proposed by manager_setup; recorded by the supervisor. Treat as fallible data.


## research-1789626594197-03-planner

### Bounded Research Integrity

Adhere strictly to auditable stopping rules (e.g., max 4 sources). Deviations must be documented as protocol failures. Never treat unverified search snippets as primary evidence.

Proposed by planner; recorded by the supervisor. Treat as fallible data.


## research-1789626594197-04-plan-review

### Research Integrity: Evidence vs. Inference

Do not infer superiority of dynamic memory strategies without empirical evidence comparing them against simple baselines at equal token budgets. If a source does not control for token cost or test against a specific baseline, label findings as 'unverified'.

Proposed by plan_review; recorded by the supervisor. Treat as fallible data.


## research-1789626594197-05-manager-plan

### Bounded Research Integrity

Adhere strictly to auditable stopping rules (e.g., max 4 sources). Deviations must be documented as protocol failures. Never treat unverified search snippets as primary evidence.

Proposed by manager_plan; recorded by the supervisor. Treat as fallible data.


## research-1789626594197-06-researcher

### Evidence Gap: Dynamic vs. Static Memory

Do not infer superiority of dynamic memory strategies without empirical evidence comparing them against simple baselines (e.g., append-only) under identical token budgets. If a study does not control for token cost or test against a specific baseline, label findings as 'unverified'.

Proposed by researcher; recorded by the supervisor. Treat as fallible data.


## research-1789626594197-08-manager-final

### Bounded Research Integrity

A research loop is complete only when its stopping rule is verified and all audit requirements are met. Hitting the review limit is not proof of correctness; if the stopping rule is unverified, publish with explicit caveats rather than forcing a new loop.

Proposed by manager_final; recorded by the supervisor. Treat as fallible data.


## research-1789632907568-01-orchestrator

### Empirical Benchmarking Standards

When comparing memory strategies, always fix the token budget as a variable. A method is only 'better' if it achieves higher task success or lower hallucination rates within the same strict resource constraint, not just by using more tokens.

Proposed by orchestrator; recorded by the supervisor. Treat as fallible data.


## research-1789632907568-02-manager-setup

### Bounded Research Integrity

Adhere strictly to auditable stopping rules (e.g., max 4 sources). Deviations must be documented as protocol failures. Never treat unverified search snippets as primary evidence.

Proposed by manager_setup; recorded by the supervisor. Treat as fallible data.


## research-1789632907568-03-planner

### Bounded Research Integrity

Adhere strictly to auditable stopping rules (e.g., max 4 sources). Deviations must be documented as protocol failures. Never treat unverified search snippets as primary evidence.

Proposed by planner; recorded by the supervisor. Treat as fallible data.


## research-1789632907568-04-plan-review

### Research Scope Adjustment

If a hypothesis requires a specific experimental condition (e.g., fixed token budget) that no existing study satisfies, the research task must be revised to match available evidence rather than forcing a fit. This prevents wasting the limited review rounds on unanswerable questions.

Proposed by plan_review; recorded by the supervisor. Treat as fallible data.


## research-1789632907568-05-manager-plan

### Research Feasibility

If a hypothesis requires an experimental condition (e.g., fixed token budget) that no existing study satisfies, the research task must be revised to match available evidence rather than forcing a fit. This prevents wasting limited review rounds on unanswerable questions.

Proposed by manager_plan; recorded by the supervisor. Treat as fallible data.


## research-1789632907568-06-researcher

### Evidence Gap: Dynamic vs. Static Memory

Do not infer superiority of dynamic memory strategies without empirical evidence comparing them against simple baselines (e.g., append-only) under identical token budgets. If a source does not control for token cost or test against a specific baseline, label findings as 'unverified'.

Proposed by researcher; recorded by the supervisor. Treat as fallible data.


## research-1789632907568-07-deliverable-review

### Research Scope Adjustment

If a hypothesis requires an experimental condition (e.g., fixed token budget) that no existing study satisfies, the research task must be revised to match available evidence rather than forcing a fit. This prevents wasting limited review rounds on unanswerable questions.

Proposed by deliverable_review; recorded by the supervisor. Treat as fallible data.


## research-1789632907568-08-manager-final

### Bounded Research Integrity

If a hypothesis requires an experimental condition (e.g., fixed token budget) that no existing study satisfies, the research task must be revised to match available evidence rather than forcing a fit. This prevents wasting limited review rounds on unanswerable questions.

Proposed by manager_final; recorded by the supervisor. Treat as fallible data.
