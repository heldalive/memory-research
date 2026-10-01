# Papers

The reading list for the literature review: every arXiv paper whose abstract mentions agents together with language models, 22,008 papers so far. The list is broad on purpose. Work on agent memory often calls it context management, reflection, experience or state rather than memory, so the list starts wide and the reading narrows it.

**Read so far: 1,488 of 22,008.** 861 score 8.5 or more for relevance to agent memory, and 859 of those have notes. The most relevant are in [memory.md](memory.md); all of them, with notes, in [memory.csv](memory.csv).

## How each paper is read

The model reads one paper at a time, from its title and abstract, and fills in a short form. It can only answer with the listed options:

- **memory in abstract**: yes, unclear or no. Does the abstract say the agent keeps information from earlier steps, sessions or tasks and uses it later? Fetching documents or web pages for the task at hand does not count, and neither does computer memory. A paper answered no cannot score above 3 for relevance, and one answered unclear, above 5.
- **relevance**, 0 to 10: how much the paper is about memory for AI agents. 10, the whole paper is about agent memory; 9, memory is the main contribution alongside something else; 8, a memory component is one of its named contributions; 7, memory is described and evaluated; 6, described but not evaluated; 5, one design issue among several; 4, mentioned in passing; 3, retrieval, long context or caching but not memory of the agent's own past; 2, agents without memory; 1, language models but not agents; 0, not about AI.
- **memory**: none, context, retrieval, graph, summaries, notes, skills, parametric, compression, tiered or other.
- **kind**: method, benchmark, survey, study, tool, position or other.
- **domain**: coding, web, robotics, games, assistants, science, multi-agent, general or other.

Each paper is read twice, with the question worded differently. When the two reads agree (scores within two points, same kind of memory) the paper's score is their average; otherwise a third read settles it by median and majority, and a label with no majority is marked unsure. Papers scoring 8.5 or more are read once more for notes: a one-line summary, the problem and main result copied from the abstract, the benchmarks it names, and one question the abstract answers. Copied lines are checked against the abstract and dropped if they do not match.

Papers that mention memory are read first, newest first; then papers that mention a related idea; then the rest. A paper whose title and abstract mention neither is held to 3 or less, whatever the model answers.

## How good the reading is

Before the reading began, 100 papers drawn from the list were given relevance labels independently, by a larger model reading the same titles and the opening of each abstract, and compared with this reader's scores. Of the papers the reader scored 8.5 or more, 92% were about agent memory by those labels, and it found 82% of the papers that were. Its scores below that line are rougher: many agent papers with no real memory component still score 7 or 8, so treat 8.5 as the line and anything under it as a sorting hint.

## Files

- [memory.md](memory.md), [memory.csv](memory.csv): the papers most relevant to agent memory.
- [read/](read/): one file per day, every paper whose reading finished that day, with its score and labels. Latest: [2026-10-01](read/2026-10-01.csv).
- One file per year of the list: [2026](2026.csv) (11,801), [2025](2025.csv) (6,905), [2024](2024.csv) (2,444), [2023](2023.csv) (679), [2022](2022.csv) (88), [2021](2021.csv) (33), [2020](2020.csv) (35), [2019](2019.csv) (14), [2018](2018.csv) (4), [2017](2017.csv) (2), [2016](2016.csv) (1), [2015](2015.csv) (1), [2013](2013.csv) (1).

The list comes from arXiv's search for abstracts containing "agent", "agents" or "agentic" together with "LLM", "LLMs", "language model" or "language models", and new papers are added as they appear. A score is a reading of an abstract, not a review of the paper, and a paper on the list is a pointer, not an endorsement.
