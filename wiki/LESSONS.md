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
