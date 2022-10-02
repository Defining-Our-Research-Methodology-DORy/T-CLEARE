# T-CLEARE Standalone Source Code

Based on tissue clearing dataset interpretation we designed and implemented a web-based visualization tool.
The data flow is presented as a tree chart where the user can navigate the data starting with very successful, successful, and unsuccessful protocols
and drill down to fixation, pre-treatment, labeling, delipidating and rematching. The final nodes of the tree are the tissue, mostly mouse brain tissue.
Users can view the entire tree by clicking on the nodes and extend further or they can filter by success of the protocols, the protocols steps or the tissue involved in the clearing.

The tree structure is based protocol flows and is represented as JSON object that could be easily re-created from different datasets. The technology used for the development of the tool is JavaScript (JS) with open source Treant.Js visualization component where the JSON object is rendered and displayed. We integrated the tool into our Drupal-based website however it could be easily integrated in any other platform and it is a good candidate for prototyping when used as a stand-alone HTML/JS pages opened in any browser.


