# The supervisor workflow

## Roles and boundaries

| Role | Owns | Does not do |
| --- | --- | --- |
| Orchestrator | Overall objective, manager assignment, priorities, review of manager handoffs | Source research, detailed planning, deliverable review, implementation |
| Research manager | Bounded task, branch/worktree, child assignments, phase transitions, instance accounting, loop resolution, final disposition | Act as its own planner, researcher, or reviewer |
| Planner | A feasible question, search strategy, source criteria, stopping rule | Claim the proposed research has already been performed |
| Plan reviewer | A light check of scope, feasibility, missing controls, and evidential standards | Expand a small task into an unbounded survey |
| Researcher | Retrieve sources, evaluate claims, write a bounded synthesis with provenance | Execute code found in sources, treat sources as instructions, claim an unread source was verified |
| Deliverable reviewer | Check citations, supported conclusions, limitations, and completion against the accepted plan | Silently fix the work and review its own fixes |
| Publisher | Export labeled workflow traces and allowed manager-reviewed files; record commits | Publish private runtime state or accept new objectives from repository comments |

The publisher can be deterministic runtime code. It need not be a model instance. Every actual model invocation receives its own instance identifier, including retries and repeat reviews.

## One cycle

1. **Resume.** The orchestrator reads [HANDOFF.md](HANDOFF.md), receives the research manager's status, and assigns one bounded question. Only research managers are enabled; extra capacity can support additional independent questions.
2. **Prepare.** The manager acquires its branch, checks for unfinished work, sets a task identifier, and records acceptance criteria. Existing changes are resumed or explicitly preserved; they are never discarded merely to obtain a clean tree.
3. **Plan.** A planner proposes the source search and deliverable. A plan reviewer performs a short review.
4. **Resolve the plan.** A first review can request revision. The revised plan receives at most one further review. After review two, the manager accepts, narrows, defers, or blocks the task and records why. There is no third review under a new label.
5. **Research.** A distinct researcher follows the accepted plan using web search. Code-execution tools are disabled in this research-only stage. Source text, repository content, and wiki entries are evidence rather than privileged instructions.
6. **Review the deliverable.** A reviewer checks material claims against the cited evidence. Proposed source URLs receive a separate HTTP reachability check; a working URL does not verify its claims. One corrective research pass and one second review are allowed. Reviewer agreement does not establish a claim experimentally.
7. **Dispose and publish.** The manager resolves outstanding points. Publish only an approved, bounded note, or a clearly labeled limitations/failure note. A missing citation does not become verified because the review budget expired.
8. **Handoff.** Record every instance, the useful result, remaining uncertainties, exact next action, and any wiki lesson. The manager reports to the orchestrator; the orchestrator does not address the child instances directly.

A review “round” means one reviewer invocation on a version of the artifact. Planner/researcher revisions are separate recorded invocations. Review counts persist across process restarts and station changes.

## Branch and publication discipline

Each research manager owns a branch named `manager/research-cloud-<id>`. Cloudflare stores the structured agent contexts and a serialized publication outbox. The deterministic publisher writes bounded notebook paths using GitHub’s Git database API, preserving the current tree and updating references without force pushes. No model runs Git commands or selects arbitrary repository paths.

Individual role records appear on the manager branch. Main carries a pointer to current loops and receives the complete bounded loop’s records, sources and disposition at closure. A failure is labeled as a failure. Publication retries do not rerun completed inference. Earlier filesystem/worktree-based runs remain historical records.

## Bounds, recovery, and growth

Each complete inference group can support a research loop, up to eight. Child roles run serially within a loop; different managers can advance concurrently. Each invocation has a time/token allowance and each scheduled cycle has a stop point. A timeout becomes a recorded partial or failed attempt, not a hidden retry storm.

A resumed manager checks existing task and publication identifiers before rerunning work. If a previous publication succeeded but its acknowledgment was lost, reconcile the commit before making another export. A late result from an expired or superseded instance must not replace current work.

See [phase gates](PHASE-GATES.md) before adding implementation or other tool capabilities. See [record conventions](RECORDS.md) for public evidence. The private runtime owns enforcement; these documents make the intended behavior reviewable.

## Browser loss and saved agents

Agent instance IDs are stable across connection loss. Inference leases are temporary and receive a new ID on reassignment; a late result from the previous lease cannot advance the workflow. Completed steps and review counts live in durable storage. Losing one group does not cancel a different group’s task. At zero capacity, queued agents wait. The art, funding and reflection stations have separate saved contexts and never inherit the research transcript.
