# Public records and private state

The public record should make delegation inspectable without exposing credentials, hidden prompts, or unrestricted execution traces.

## Stable paths

| Path | Purpose |
| --- | --- |
| `orchestration/HANDOFF.md` | Orchestrator's compact research handoff |
| `orchestration/managers/<loop-id>/HANDOFF.md` | Manager's current task and next action |
| `orchestration/managers/<loop-id>/STATUS.md` | Human-readable active and recent child-instance index |
| `orchestration/instances/<instance-id>.json` | One saved role instance; rejected outputs have separate records; connection retries preserve the instance ID |
| `orchestration/runs/<loop-id>.json` | One bounded cycle and its disposition/publication |
| `refs/` | Actual loop-discovered or rechecked source records |
| `wiki/LESSONS.md` | Reusable findings about the workflow |
| `wiki/LOOP-RESOLUTIONS.md` | Decisions made when a review budget was exhausted |

The runtime may generate the Markdown views from durable structured state. Private runtime state is authoritative for leases, credentials, station selection, prompt assembly, and process recovery; public documents alone do not grant execution permission.

## Invocation record

For every spawned model instance, record:

- Unique instance ID, cycle/task ID, parent/supervisor ID, role, and model identifier.
- Assigned objective and expected deliverable; start and end timestamps.
- Status: queued, running, completed, partial, failed, interrupted, timed out, cancelled, or superseded.
- Result summary and artifact paths, including no-result outcomes.
- Actual usage when reported: input/output tokens and elapsed time. Use `null` or “unavailable” when unavailable; do not substitute an estimate for a measurement.
- Error or limitation, and any retry's link to the earlier instance.

A role name is not an instance ID. Two reviewer calls are two instances. An orchestrator call and a manager call are also recorded. A queued assignment is not reported as completed work.

## Cycle record

Record the objective, manager, branch and commit history, ordered child instances, accepted plan, review-round counters, final disposition, artifacts, caveats, publication status/commit, and next action. A cycle remains unapproved until the manager records its disposition.

The two review counters are independent: plan review has at most two rounds; deliverable review has at most two. Preserve the counters across retries and restarts. If a task is materially changed, link its successor and explain the change instead of resetting counters to conceal an unresolved loop.

## Public export boundary

Export allowlisted workflow traces, citations, wiki proposals, public handoffs, and permitted artwork. Intermediate step exports are explicitly labeled workflow traces, not accepted findings. Only the manager disposition establishes the status of a completed research cycle. Exclude full prompts, private station state, credentials, personal data, and raw tool transcripts that may contain them. A public error should be a useful summary, not an environment dump.

Before publication, validate paths, file sizes/types, source metadata, review disposition, and whether the export would expose private material. Check the resulting commit and record success or failure. Failed publishing does not erase the completed research or justify rerunning it automatically.

## Cloud inference records

Current records contain an `answer` object, model/source attribution, input and output token counts reported by the assigned executor, elapsed response time, retry count and inspected source metadata. The private durable checkpoint holds pending prompts and temporary lease state. A browser report is untrusted input; syntax and evidence identifiers are checked before acceptance, and the next reviewer checks the claim against source excerpts. These checks are not independent experimental reproduction or proof against a dishonest participant.

The shared checkpoint is Qwen3 4B. Earlier Qwen3.5 9B and Luna records keep their original attribution.
