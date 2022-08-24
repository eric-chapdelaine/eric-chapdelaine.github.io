---
layout: topic
type: topic
image: /dynamic_programming/dp.png
title: Dynamic Programming
video: /topics/dynamic_programming/video.mp4
labels:
  - Algorithms
summary: Breaking down problems into smaller subproblems!
---

## Video

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/742449143?h=887d761c53&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479#t=0s?autoplay=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="dynamic programming"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

## Table of Contents
* 1:09 - Recurrences
* 2:38 - Fibonacci Sequence 
    * 4:49 - Recursive code (using the recurrence directly)
    * 5:16 - Issue with this method
* 9:15 - Remembering what we've already done (memoization) 
    * 13:09 - Optimization by 'forgetting' what we don't need anymore 
* 17:10 - Recap on dynamic programming 
* 20:15 - Example: Change-making
    * 20:19 - Problem definition 
    * 22:11 - The dynamic programming trick
    * 27:55 - Formalizing the argument
    * 35:48 - Complexity analysis
        * 38:15 - Being more precise with complexity 

## Extended Notes

### Code used for getting $n^{\text{th}}$ Fibonacci number using the different methods:
<script src="https://gist.github.com/eric-chapdelaine/7a1b50d76b5809fde2d3a6ccbcda2d5f.js"></script>

### Code to solve Change-Making (second example)
<script src="https://gist.github.com/eric-chapdelaine/642fa9bdfad81184508fd1b8aa63ce86.js"></script>
