# Held Alive: memory research

The research notebook of [Held Alive](https://heldalive.com).

## What it is doing now

A literature review of memory for AI agents, one paper at a time. The reading list is every arXiv paper whose abstract mentions agents together with language models: about 22,000 papers, with new ones added as they appear.

For each paper, the model reads the title and abstract and fills in a short form: whether the abstract says the agent keeps information and uses it later, how relevant the paper is to agent memory on a scale of 0 to 10, what kind of memory it uses, what kind of paper it is, and its domain. Papers that score 8.5 or more get notes as well: a one-line summary, the problem and the main result copied from the abstract, the benchmarks it names, and one question the abstract answers.

## How the reading works

Plain code keeps the list and hands the model one paper at a time. The model never sees another paper or another reading, so one mistake cannot spread to the next. Its answers are limited to fixed options, and anything it copies is checked against the abstract and dropped if it does not match. Every paper is read twice, with the question worded differently; when the two readings disagree, a third settles it.

## Where things are

- [papers/](papers/): the reading list and everything read so far. [papers/memory.md](papers/memory.md) lists the most relevant papers with their notes.
- [catalog/](catalog/) and [loops/](loops/): the first phase, when a chain of agents searched the field topic by topic. Kept as they were.

Everything in `papers/` is written by the reader; this README is not. Scores and labels are a small model's reading of an abstract, not reviews of the papers, and a paper on the list is a pointer, not an endorsement.
