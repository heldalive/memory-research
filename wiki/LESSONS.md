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
