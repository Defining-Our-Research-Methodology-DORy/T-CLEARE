
    var chart_config_all_nodes = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: true,
            scrollbar: "fancy",
            rootOrientation:  'WEST', // NORTH || EAST || WEST || SOUTH
            siblingSeparation:   20,
            subTeeSeparation:    60,
            connectors: {
                type: 'step'
            },
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        
        

        nodeStructure: {
            image: "assets/img/protocols.png",
            children: [
                {
                    image: "assets/img/protocol-very-successful.png",
                    collapsed: true,
                    children: [
                        {
                            image: "assets/img/fixation-pfa-4-overnight.png",
                            collapsed: true,
                            children: [
                                {
                                    collapsed: true,
                                    image: "assets/img/pretreat-quadrol-decolor.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibody-anti-gfp.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-tert-butanol.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-org-bb-peg.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-cochlea.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]
                                },
                                {
                                    collapsed: true,
                                    image: "assets/img/pretreat-hydrogen-peroxide-decolor.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibody-anti-gfp.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-methanol-gradient.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-org-babb-ri.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-whole-brain.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
                                {
                                    collapsed: true,
                                    image: "assets/img/pretreat-none.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-none.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-triton-quadrol.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-sucrose-urea.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/gerbil-tissue-slices.png",
                                                                    
                                                                }
                                                            ]
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]
                                },
                                
                                {
                                    collapsed: true,
                                        image: "assets/img/pretreat-na.png",
                                        children: [
                                            {
                                                image: "assets/img/labeling-thy-yfp-retention.png",
                                                collapsed: false,
                                                children: [
                                                    {
                                                        image: "assets/img/delip-na.png",
                                                        collapsed: false,
                                                        children: [
                                                            {
                                                                image: "assets/img/refrac-org-dibenzylether.png",
                                                                collapsed: false,
                                                                children: [
                                                                    {
                                                                        image: "assets/img/mouse-whole-brain.png",
                                                                        
                                                                    }
                                                                ]
                                                            }
                            
                                                        ]
                                                    }
                    
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        collapsed: true,
                                            image: "assets/img/pretreat-none.png",
                                            children: [
                                                {
                                                    image: "assets/img/labeling-passive-antibody.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/delip-thf-dibenzylether.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/refrac-org-dibenzylether.png",
                                                                    collapsed: false,
                                                                    children: [
                                                                        {
                                                                            image: "assets/img/human-cerebral-organoid.png",
                                                                            
                                                                        }
                                                                    ]
                                                                }
                                
                                                            ]
                                                        }
                        
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            collapsed: true,
                                                image: "assets/img/pretreat-methanol-dehydration.png",
                                                children: [
                                                    {
                                                        image: "assets/img/labeling-passive-antibody.png",
                                                        collapsed: false,
                                                        children: [
                                                            {
                                                                image: "assets/img/delip-methanol-gradient.png",
                                                                collapsed: false,
                                                                children: [
                                                                    {
                                                                        image: "assets/img/refrac-org-dibenzylether.png",
                                                                        collapsed: false,
                                                                        children: [
                                                                            {
                                                                                image: "assets/img/mouse-whole-embryos.png",
                                                                                
                                                                            }
                                                                        ]
                                                                    }
                                    
                                                                ]
                                                            }
                            
                                                        ]
                                                    }
                                                ]
                                            },
                                        {
                                            collapsed: true,
                                                image: "assets/img/pretreat-methanol-dehydration.png",
                                                children: [
                                                    {
                                                        image: "assets/img/labeling-dye.png",
                                                        collapsed: false,
                                                        children: [
                                                            {
                                                                image: "assets/img/delip-methanol-gradient.png",
                                                                collapsed: false,
                                                                children: [
                                                                    {
                                                                        image: "assets/img/refrac-org-babb-ri.png",
                                                                        collapsed: false,
                                                                        children: [
                                                                            {
                                                                                image: "assets/img/mouse-whole-brain.png",
                                                                                
                                                                            }
                                                                        ]
                                                                    }
                                    
                                                                ]
                                                            }
                            
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                collapsed: true,
                                                    image: "assets/img/pretreat-methanol-dehydration.png",
                                                    children: [
                                                        {
                                                            image: "assets/img/labeling-passive-antibody.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/delip-idisco-protocol.png",
                                                                    collapsed: false,
                                                                    children: [
                                                                        {
                                                                            image: "assets/img/refrac-org-dibenzylether.png",
                                                                            collapsed: false,
                                                                            children: [
                                                                                {
                                                                                    image: "assets/img/unknown-brain-spinal-misc-organs.png",
                                                                                    
                                                                                }
                                                                            ]
                                                                        }
                                        
                                                                    ]
                                                                }
                                
                                                            ]
                                                        }
                                                    ]
                                                },
                                
                            ]
                        },
                        {
                            image: "assets/img/fixation-pfa-4-1hr-rt.png",
                            collapsed: true,
                            children: [
                                {
                                    collapsed: true,
                                    image: "assets/img/pretreat-none.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-primary-secondary-antibodies.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-clearing-overnight.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-aqueous.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-spinal-cord.png",
                                                            
                                                        }
                                                    ]
                                                }
                
                                            ]
                                        }
        
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    image: "assets/img/fixation-pfa-2-phem-5-sorbitol.png",
                    collapsed: true,
                    children: [
                        {
                            collapsed: true,
                            image: "assets/img/pretreat-none.png",
                            children: [
                                {
                                    image: "assets/img/labeling-sox1-yfp-t-mcherry.png",
                                    collapsed: false,
                                    children: [
                                        {
                                            image: "assets/img/delip-saponin-tritonx.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/refrac-omnipaque.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/mouse-embryo.png",
                                                        }
                                                  
                                                        ]
                                                    }
                    
                                                ]
                                            }
            
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                image: "assets/img/fixation-pfa-4-overnight-pbs.png",
                collapsed: true,
                children: [
                    {
                        collapsed: true,
                        image: "assets/img/pretreat-1-pfa-4-acrylamide.png",
                        children: [
                            {
                                image: "assets/img/labeling-dapi-passive-antibodies.png",
                                collapsed: false,
                                children: [
                                    {
                                        image: "assets/img/delip-passive-sds.png",
                                        collapsed: false,
                                        children: [
                                            {
                                                image: "assets/img/refrac-80-glycerol.png",
                                                collapsed: false,
                                                children: [
                                                    {
                                                        image: "assets/img/mouse-whole-brain.png",
                                                
                                            }
                                        ]
                                    }
    
                                ]
                            }

                        ]
                    }
                ]
            }
                            
                          
                                 

                            ]

                        }

                    ]
                

                },
                {
                    image: "assets/img/protocol-successful.png",
                    collapsed: true,
                    children: [
						
                        {
                            image: "assets/img/fixation-pfa-4-overnight.png",
                            collapsed: true,
                            children: [
                                {
                                    collapsed: true,
                                    image: "assets/img/pretreat-quadrol-decolor.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-thy-1-yfp-retention.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-amino-alcohol.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-aq-amino-alcohol-ri.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-whole-brain.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-quadrol-decolor.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-endogenous-flurophone.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-amino-alcohol.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-aq-amino-alcohol-ri.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-whole-brain.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-quadrol-decolor.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-retention.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-na.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-org-bb-peg-75-25.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-whole-brain.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-quadrol-decolor.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibody-staining.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-amino-alcohol.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-aq-amino-alcohol-ri.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-section-cortex.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-hydrogel-embedding.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-retention.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-amino-alcohol.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-aq-amino-alcohol-ri.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-whole-brain.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-hydrogel-embedding.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibody-tuj1.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-passive-sds.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-aq-histodenz.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/human-pancreas.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-methanol-dehydration.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-nanobody.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-thf-dibenzylether.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-org-dibenzylether.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/na-whole-brain.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-methanol-dehydration.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibody-anti-cfos.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-thf-dibenzylether.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-org-dibenzylether.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-whole-brain.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-methanol-dehydration.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibody-anti-mcherry.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-thf-dibenzylether.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-org-dibenzylether.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-section-cortex.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-methanol-dehydration.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-passive-antibody.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-thf-dibenzylether.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-org-dibenzylether.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-whole-brain.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-antigen-cross-linking.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-passive-antibody.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-sds-heat.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-water-salts.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-brain-sections.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-decalcification.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibody-anti-mcherry-anti-myovlla.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-amino-alcohol.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-aq-amino-alcohol-ri.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-cochlea.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
								{
                                    collapsed: true,
                                    image: "assets/img/pretreat-decalcification.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibody-anti-mcherry-anti-myovlla.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-urea-triton.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-urea-water-ri.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-cochlea.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
                                {
                                    collapsed: true,
                                    image: "assets/img/pretreat-na.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibody-anti-mcherry-anti-cgrp.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-methanol-gradient.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-org-babb-ri.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-skin-bladder.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                }

                            ]
                        },
                        {   
                            image: "assets/img/fixation-10-formalin.png",
                            collapsed: true,
							children: [
								{
									image: "assets/img/pretreat-quadrol-decolor.png",
									collapsed: true,
									children: [
										{
											image: "assets/img/labeling-none.png",
											collapsed: false,
                                            children: [
												{
													image: "assets/img/delip-butanol.png",
													collapsed: false,
													children: [
														{
															image: "assets/img/refrac-org-dibenzylether.png",
															collapsed: false,
															children: [
																{
																	image: "assets/img/mouse-whole-brain.png",
																}												
															]
														}
													
													]
												}
											
											]
										}
									]
								}
							]
                        },
						{   
                            image: "assets/img/fixation-4-paf-48hr.png",
                            collapsed: true,
							children: [
								{
									image: "assets/img/pretreat-hydrogel-sa.png",
									collapsed: true,
									children: [
										{
											image: "assets/img/labeling-passive-antibody.png",
											collapsed: false,
                                            children: [
												{
													image: "assets/img/delip-enzyme-mediated.png",
													collapsed: false,
													children: [
														{
															image: "assets/img/refrac-water-salts.png",
															collapsed: false,
															children: [
																{
																	image: "assets/img/mouse-whole-brain.png",
																}												
															]
														}
													
													]
												}
											
											]
										}
									]
								}
							]
                        },
						{   
                            image: "assets/img/fixation-clarity-shield-short.png",
                            collapsed: true,
							children: [
								{
									image: "assets/img/pretreat-clarity-hydrogel-shield-tissue-gel.png",
									collapsed: true,
									children: [
										{
											image: "assets/img/labeling-antibodies.png",
											collapsed: false,
                                            children: [
												{
													image: "assets/img/delip-passive-sds.png",
													collapsed: false,
													children: [
														{
															image: "assets/img/refrac-tde-pbs.png",
															collapsed: false,
															children: [
																{
																	image: "assets/img/human-multiple-brain-areas.png",
																}												
															]
														}
													
													]
												}
											
											]
										}
									]
								}
							]
                        },
						{   
                            image: "assets/img/fixation-4-formalin-5sulf-acid.png",
                            collapsed: true,
							children: [
								{
									image: "assets/img/pretreat-na.png",
									collapsed: true,
									children: [
										{
											image: "assets/img/labeling-tissue-autofluorescence.png",
											collapsed: false,
                                            children: [
												{
													image: "assets/img/delip-dimethoxy-propane.png",
													collapsed: false,
													children: [
														{
															image: "assets/img/refrac-org-dibenzylether.png",
															collapsed: false,
															children: [
																{
																	image: "assets/img/human-paraffin-soft-tissue.png",
																}												
															]
														}
													
													]
												}
											
											]
										}
									]
								}
							]
                        },
						{   
                            image: "assets/img/fixation-ga-2-overnight.png",
                            collapsed: true,
							children: [
								{
									image: "assets/img/pretreat-tissue-gel-h2o2-antigen.png",
									collapsed: true,
									children: [
										{
											image: "assets/img/labeling-various-antibodies.png",
											collapsed: false,
                                            children: [
												{
													image: "assets/img/delip-na.png",
													collapsed: false,
													children: [
														{
															image: "assets/img/refrac-aq-tde-pbs-68.png",
															collapsed: false,
															children: [
																{
																	image: "assets/img/human-multiple-brain-areas.png",
																}												
															]
														}
													
													]
												}
											
											]
										}
									]
								},
								{
									image: "assets/img/pretreat-tissue-gel-lowph.png",
									collapsed: true,
									children: [
										{
											image: "assets/img/labeling-antibody-tuj1.png",
											collapsed: false,
                                            children: [
												{
													image: "assets/img/delip-passive-sds.png",
													collapsed: false,
													children: [
														{
															image: "assets/img/refrac-aq-tde-pbs-68.png",
															collapsed: false,
															children: [
																{
																	image: "assets/img/human-multiple-brain-areas.png",
																}												
															]
														}
													
													]
												}
											
											]
										}
									]
								}
							]
                        }
                    ]
                },
                {
                    image: "assets/img/protocol-not-successful.png",
                    collapsed: true,
                    childrenDropLevel: 1,
                    children: [
                        {
                            collapsed: true,
                            image: "assets/img/fixation-ga-2-overnight.png",
                            children: [
                            
                                {
                                    collapsed: true,
                                    image: "assets/img/pretreat-inactivation-fix.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibody-anti-mbp.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-passive-sds.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-diatrizoic-iodinaxol.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-section-cortex.png",
                                                                    
                                                                }
                                                            ]
                                                            }
                                                        ]
                                                        }
                                                    ]
                                                    }
                                                ]
                                            },
                                                                        {
                                    collapsed: true,
                                    image: "assets/img/pretreat-tissue-gel-lowph.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-passive-antibody.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-active-electro.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-aq-90-glycerol.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-embryo.png",
                                                                    
                                                                }
                                
                                                            ]
                                                            
                                                        }
                        
                                                    ]
                                                }
                
                                            ]
                                        }
                                    ]    
                                },
                                
                    ]
                },
				{
                            collapsed: true,
                            image: "assets/img/fixation-pfa-4-overnight.png",
                            children: [
                                {
                                    collapsed: true,
                                    image: "assets/img/pretreat-none.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibody-anti-gfp.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-butanol.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-org-dibenzylether.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/mouse-section-cortex.png",
                                                                }
                                                            ]
                                                            }
                                                        ]
                                                        }
                                                    ]
                                                    }
                                                ]
                                            },
                                                                        {
                                    collapsed: true,
                                    image: "assets/img/pretreat-hydrogel-embedding.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibodies.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-passive-sds.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-aq-tde-pbs-68.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/human-multiple-brain-areas.png",
                                                                    
                                                                    
                                                                }
                                                            ]
                                                            }
                                                        ]
                                                        }
                                                    ]
                                                    }
                                                ]
                                                }
                                            ]
                                        },
										{
                            collapsed: true,
                            image: "assets/img/fixation-epoxy-solution.png",
                            children: [
                                {
                                    collapsed: true,
                                    image: "assets/img/pretreat-shield.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-antibodies.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-passive-sds.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-aq-tde-pbs-68.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/human-multiple-brain-areas.png",
                                                                    
                                                                }
                                                            ]
                                                            }
                                                        ]
                                                        }
                                                    ]
                                                    }
                                                ]
                                                }
                                            ] 
                                        },
						 {
                            collapsed: true,
                            image: "assets/img/fixation-other-fixation.png",
                            children: [
                                {
                                    collapsed: true,
                                    image: "assets/img/pretreat-other-pretreat.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-passive-antibody.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-other.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-org-bb-peg.png",
                                                            collapsed: false,
                                                            children: [
                                                                {
                                                                    image: "assets/img/na.png",
                                                                    
                                                                }
                                                            ]
                                                            }
                                                        ]
                                                        }
                                                    ]
                                                    }
                                                ]
                                                }
                                            ]
                                        },
                
            ]
        }
    ]
        }
    };

