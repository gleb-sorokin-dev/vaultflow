import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import pullUp from "@/assets/pull-up.svg";
import { Button } from "../ui/button";
import { useState, useRef, useEffect, useCallback } from "react";

export default function Features() {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [hoverStates, setHoverStates] = useState<boolean[]>([]);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, 3);
    setHoverStates([false, false, false]);
    setPositions([
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ]);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const newPositions = [...positions];
      const newHoverStates = [...hoverStates];

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(e.clientX - cardCenterX, 2) +
            Math.pow(e.clientY - cardCenterY, 2)
        );

        const isNear = distance < 350;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        newPositions[index] = { x, y };
        newHoverStates[index] = isNear;
      });

      setPositions(newPositions);
      setHoverStates(newHoverStates);
    },
    [hoverStates, positions]
  );

  const setCardRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      cardsRef.current[index] = el;
    },
    []
  );

  return (
    <section
      className="container max-w-6xl mx-auto md:mt-30 mt-20"
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="md:text-6xl text-3xl font-medium md:max-w-xl max-w-80 text-center">
          Features that work for your future.
        </h2>
        <p className="text-gray-600 text-center max-w-80 md:max-w-100 mt-10 md:text-xl text-[14px]">
          Check out our amazing features and experience the power of Vaultflow
          for yourself.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-25 md:mt-26">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div
            ref={setCardRef(0)}
            className="relative rounded-xl overflow-hidden"
          >
            <Card className="bg-[#0e0922] border-none transition-colors h-full">
              <div className="block items-start max-w-130">
                <CardHeader>
                  <img src={pullUp} alt="pull up logo" />
                  <CardTitle className="mt-3 text-3xl">
                    Analytics Dashboard
                  </CardTitle>
                  <CardDescription className="mt-3 text-gray-400">
                    Our Analytics Dashboard provides a clear and intuitive
                    interface for you to easily analyze your data. From
                    customizable graphs to real-time data updates, our dashboard
                    offers everything you need to gain valuable insights.
                  </CardDescription>
                </CardHeader>
                <Button className="ml-2 mt-3" variant="link">
                  View dash board
                </Button>
              </div>
            </Card>

            <div
              className="absolute inset-0 pointer-events-none transition-all duration-500"
              style={{
                opacity: hoverStates[0] ? 0.8 : 0,
                mask: `radial-gradient(400px at ${positions[0]?.x || 0}px ${
                  positions[0]?.y || 0
                }px, 
                        rgba(0,0,0,1) 0%, 
                        rgba(0,0,0,0.15) 50%, 
                        transparent 100%)`,
                WebkitMask: `radial-gradient(400px at ${
                  positions[0]?.x || 0
                }px ${positions[0]?.y || 0}px, 
                             rgba(0,0,0,1) 0%, 
                             rgba(0,0,0,0.15) 50%, 
                             transparent 100%)`,
                background: `radial-gradient(800px circle at ${
                  positions[0]?.x || 0
                }px ${positions[0]?.y || 0}px, 
                             rgba(59, 248, 251, 0.15) 0%, 
                             rgba(196, 59, 251, 0.1) 40%, 
                             transparent 80%)`,
              }}
            />
          </div>

          <div
            ref={setCardRef(1)}
            className="relative rounded-xl overflow-hidden"
          >
            <Card className="bg-[#0e0922] border-none transition-colors h-full">
              <div className="block items-start max-w-130">
                <CardHeader>
                  <img
                    src={pullUp}
                    alt="integration icon"
                    className="w-10 h-10 mb-4"
                  />
                  <CardTitle className="text-3xl">API Integrations</CardTitle>
                  <CardDescription className="mt-3 text-gray-400">
                    Seamlessly connect with any API endpoint. Our integration
                    tools allow you to easily sync data across multiple
                    platforms and services without any coding required.
                  </CardDescription>
                </CardHeader>
                <Button className="ml-2 mt-3" variant="link">
                  Explore integrations
                </Button>
              </div>
            </Card>

            <div
              className="absolute inset-0 pointer-events-none transition-all duration-500"
              style={{
                opacity: hoverStates[1] ? 0.8 : 0,
                mask: `radial-gradient(400px at ${positions[1]?.x || 0}px ${
                  positions[1]?.y || 0
                }px, 
                        rgba(0,0,0,1) 0%, 
                        rgba(0,0,0,0.15) 50%, 
                        transparent 100%)`,
                WebkitMask: `radial-gradient(400px at ${
                  positions[1]?.x || 0
                }px ${positions[1]?.y || 0}px, 
                             rgba(0,0,0,1) 0%, 
                             rgba(0,0,0,0.15) 50%, 
                             transparent 100%)`,
                background: `radial-gradient(800px circle at ${
                  positions[1]?.x || 0
                }px ${positions[1]?.y || 0}px, 
                             rgba(59, 248, 251, 0.15) 0%, 
                             rgba(196, 59, 251, 0.1) 40%, 
                             transparent 80%)`,
              }}
            />
          </div>
        </div>

        <div
          ref={setCardRef(2)}
          className="relative rounded-xl overflow-hidden"
        >
          <Card className="bg-[#0e0922] border-none transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <img
                    src={pullUp}
                    alt="code collaboration icon"
                    className="w-10 h-10 mb-6"
                  />
                  <CardTitle className="text-3xl mb-4">
                    Code collaboration
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-6">
                    Our advanced code synchronization technology ensures that
                    your data is always up-to-date and accurate, no matter where
                    it's coming from. Whether you're integrating data from
                    multiple sources or working with a team of developers, our
                    synchronization technology makes it easy to collaborate and
                    ensure that your data is consistent and reliable.
                  </CardDescription>

                  <div className="mt-4">
                    <Button variant="link" className="pl-0">
                      View code collaboration
                    </Button>
                  </div>
                </div>

                <div className="md:w-1/2 mt-6 md:mt-0">
                  <div className="bg-[#0f0c24] rounded-lg overflow-hidden border border-[#2d2a40]">
                    <div className="bg-[#1a172e] px-4 py-2 border-b border-[#2d2a40]">
                      <span className="text-sm text-gray-400">
                        DigitalToken.js
                      </span>
                    </div>
                    <div className="p-4 font-mono text-sm text-gray-300">
                      <pre className="overflow-x-auto">
                        <code>
                          <div className="flex">
                            <div className="text-gray-500 pr-4 select-none">
                              1
                            </div>
                            <div>// addNumbersToToken</div>
                          </div>
                          <div className="flex">
                            <div className="text-gray-500 pr-4 select-none">
                              2
                            </div>
                            <div>
                              function addNumbersToToken(num1, num2) {"{"}
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-gray-500 pr-4 select-none">
                              3
                            </div>
                            <div className="pl-4">let sum = num1 + num2;</div>
                          </div>
                          <div className="flex">
                            <div className="text-gray-500 pr-4 select-none">
                              4
                            </div>
                            <div className="pl-4">let token = {"{"}</div>
                          </div>
                          <div className="flex">
                            <div className="text-gray-500 pr-4 select-none">
                              5
                            </div>
                            <div className="pl-8">value: sum,</div>
                          </div>
                          <div className="flex">
                            <div className="text-gray-500 pr-4 select-none">
                              6
                            </div>
                            <div className="pl-8">hash: createHash(sum),</div>
                          </div>
                          <div className="flex">
                            <div className="text-gray-500 pr-4 select-none">
                              7
                            </div>
                            <div className="pl-4">{"}"}</div>
                          </div>
                          <div className="flex">
                            <div className="text-gray-500 pr-4 select-none">
                              8
                            </div>
                            <div>return token;</div>
                          </div>
                          <div className="flex">
                            <div className="text-gray-500 pr-4 select-none">
                              9
                            </div>
                            <div>{"}"}</div>
                          </div>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div
            className="absolute inset-0 pointer-events-none transition-all duration-500"
            style={{
              opacity: hoverStates[2] ? 0.8 : 0,
              mask: `radial-gradient(400px at ${positions[2]?.x || 0}px ${
                positions[2]?.y || 0
              }px, 
                      rgba(0,0,0,1) 0%, 
                      rgba(0,0,0,0.15) 50%, 
                      transparent 100%)`,
              WebkitMask: `radial-gradient(400px at ${positions[2]?.x || 0}px ${
                positions[2]?.y || 0
              }px, 
                           rgba(0,0,0,1) 0%, 
                           rgba(0,0,0,0.15) 50%, 
                           transparent 100%)`,
              background: `radial-gradient(800px circle at ${
                positions[2]?.x || 0
              }px ${positions[2]?.y || 0}px, 
                           rgba(59, 248, 251, 0.15) 0%, 
                           rgba(196, 59, 251, 0.1) 40%, 
                           transparent 80%)`,
            }}
          />
        </div>

        <div
          ref={setCardRef(3)}
          className="relative rounded-xl overflow-hidden h-full"
        >
          <Card className="bg-[#0e0922] border-none transition-colors h-full flex items-center justify-center">
            <div className="text-center max-w-md lg:max-w-xl w-full px-4 py-10 md:py-15">
              <div className="flex flex-col items-center">
                <CardTitle className="text-3xl mt-2">
                  Our powerful analytics provides invaluable insights.
                </CardTitle>

                <CardDescription className="mt-4 text-gray-400 px-4">
                  Unlock the power of data with our cutting-edge analytics
                  product. Get instant insights with our user-friendly Analytics
                  Dashboard, and take advantage of our innovative digital credit
                  tokens to reward your customers and incentivize engagement.
                </CardDescription>

                <Button className="mt-6" variant="link">
                  Explore integrations
                </Button>
              </div>
            </div>
          </Card>

          <div
            className="absolute inset-0 pointer-events-none transition-all duration-500"
            style={{
              opacity: hoverStates[3] ? 0.8 : 0,
              mask: `radial-gradient(400px at ${positions[3]?.x || 0}px ${
                positions[3]?.y || 0
              }px, 
                rgba(0,0,0,1) 0%, 
                rgba(0,0,0,0.15) 50%, 
                transparent 100%)`,
              WebkitMask: `radial-gradient(400px at ${positions[3]?.x || 0}px ${
                positions[3]?.y || 0
              }px, 
                   rgba(0,0,0,1) 0%, 
                   rgba(0,0,0,0.15) 50%, 
                   transparent 100%)`,
              background: `radial-gradient(800px circle at ${
                positions[3]?.x || 0
              }px ${positions[3]?.y || 0}px, 
                   rgba(59, 248, 251, 0.15) 0%, 
                   rgba(196, 59, 251, 0.1) 40%, 
                   transparent 80%)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
