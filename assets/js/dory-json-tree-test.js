
    var chart_config_all_nodes = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: true,
            rootOrientation:  'WEST', // NORTH || EAST || WEST || SOUTH
            scrollbar: "None",
            // levelSeparation: 30,
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
                    image: "assets/img/very-successful.png",
                    collapsed: true,
                    stackChildren: false,
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
                        image: "assets/img/pretreat-none.png",
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
                    image: "assets/img/successful.png",
                    collapsed: true,
                    stackChildren: false,
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
                                    image: "assets/img/pretreat-hydrogel-embedding.png",
                                    children: [
                                        {
                                            image: "assets/img/labeling-td-tomato-retention.png",
                                            collapsed: false,
                                            children: [
                                                {
                                                    image: "assets/img/delip-active-electro.png",
                                                    collapsed: false,
                                                    children: [
                                                        {
                                                            image: "assets/img/refrac-aq-clarity-mount.png",
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
                                    image: "assets/img/pretreat-none.png"
                                }

                            ]
                        },
                        {   
                            image: "assets/img/fixation-10-formali.png",
                            collapsed: true
                        }

                    ]
                },
               {
                    image: "assets/img/not-successful.png",
                    collapsed: true,
                    //childrenDropLevel: 1,
                    stackChildren: false,
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
                        
                        {
                            collapsed: true,
                            image: "assets/img/fixation-pfa-4-overnight.png",
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
                                                    image: "assets/img/delip-butanol.png",
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
                                                }
                                            ]
                                        },
                        
                        {
                            collapsed: true,
                            image: "assets/img/fixation-pfa-4-overnight.png",
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
                                                    image: "assets/img/delip-butanol.png",
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
                                                }
                                            ]
                                        },
                        {
                            collapsed: true,
                            image: "assets/img/fixation-other-fixation.png",
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
                                                    image: "assets/img/delip-butanol.png",
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
                                                }
                                            ]
                                        },
                        {
                            collapsed: true,
                            image: "assets/img/fixation-epoxy-solution.png",
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
                                                    image: "assets/img/delip-butanol.png",
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
                                                }
                                            ] 
                                        }
                                    
                        
                    ]
                }
                
            ]
        }
    ]
        }
    };

