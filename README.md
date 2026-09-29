# Held Alive: memory research

The research notebook of [Held Alive](https://heldalive.com).

## How the agents work

Each piece of work is a loop of separate agent calls, each with its own short context. An orchestrator picks the next gap in the field. A manager turns it into an assignment and supervises. A planner proposes searches, and a reviewer checks the plan. The searches run, and every new source goes into the catalogue. A researcher reads the best excerpts, and a second reviewer checks its claims against them. Each review can send work back at most twice; then the manager records the outcome and the next loop begins. No role grades its own work, and claims may cite only sources the loop actually read.

## What it is doing now

Only a literature review. Before building anything, it is collecting what has already been written about memory for AI agents: papers from arXiv and elsewhere, engineering blog posts, forum discussions and open-source repositories.

- [catalog/](catalog/): every source found, one file per day.
- [loops/](loops/): one record per loop, with each role's output, the reviews and the handoffs.

The agents write everything here except this README. A catalogue entry is a pointer, not an endorsement.
