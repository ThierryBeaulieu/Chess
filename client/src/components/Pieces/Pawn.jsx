import React from 'react';

export default function WhitePawn({ height, width }) {
  return (
    <svg
      version='1.2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 400 400'
      width={width || '400'}
      height={height || '400'}
    >
      <title>WhitePawn</title>
      <defs>
        <image
          width='200'
          height='239'
          id='img1'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADvCAYAAAC38ZsQAAAAAXNSR0IB2cksfwAAFDFJREFUeJztnWtsXdWVx6O2qKo0nS+oH9oP7dAO+TBFSBVNK0rQ0Glmiih9QVWlpS2CSoVSmFEJ0xFKNT2JY9cxCXZC3nGIgSjYMQ+TumC3gbEaY5s8ncggM3m/iJPYiZ2SxI+Y07WOnepys9c+x/a9Z51z9v8nLSmKX+es9f/f89h7rz1tGogdz/O+7o2xnOJPFHsojlNcGo/j4//HX1tG8TuK27SPG4CCQ8K+leK3FEsodlO8TuFPMraM/44nKR6n+Jr2+QEwYUi436QoG78CTNYMUeO18b/1Te3zBsAKifR2ir/EYAop/gKjgMTBtzoUWxWNYTLKzdp5AY5DIvwCxasJMIQUf6T4vHaegIOQ8H5IcWSioi0rK/OfeeYZ/7XXXvO3bdvmHzhwwO/p6fHPnz/vj4yMBMH/5v/jr/H3vPrqq8HP8M9OwiSHcdsFYoPEdgtF50RE+txzz/kdHR3+yZMn/anCv6O9vT34nZO47bpRO38gw5DAfkRxMUyM8+bNCwS8c+dO/+LFi1M2hcSFCxeCv8F/i/9mBJOchklAUSBhPRDlk7qystLftWuXPzo6WjRj5MN/i43Cfzvi1WS2dj5BhiBBPRYmuvLycr+trc2/fPlybMbIh/82HwMfSwSTPKCdV5ABSEi/tgmtpKTEb25u9i9duqRmjHz4WJqamoJjCzHJY9r5BSmGBPQLm8AWLFjgv/3229p+EOHbLj7GEJP8WjvPIIWQcO4Ie9Y4deqUtgdC4dfFEZ5N7tXON0gRJJjP2QS1evXqYKwiLfCx8jGHmOQO7byDFDBujgOSkOrq6vzh4WFtzU8YPuaQsZPDFB/Vzj9IOCSSzZKIVq5c6Q8ODmprfdLwsS9dutRmkge18w8SDAlkhiSeiooKf2BgQFvjU6avry84F4tJfqpdB5BASBif8YRRch6lPnTokLa2Cwafi2XknXPwae16gIRBopgnfaq2trZqa7rgtLS02K4innY9QIIgPUynOGYSy8aNG7W1XBQ++OADv6amRjII52K6dl1AQiAxNJuEwiPRvb292louGmfOnLGNtjdr1wUkABLCTOlWg29Dss6WLVtst1oztesDlCERzDWJ48knn1SdeBgXQ0NDwbkKBpmrXR+giDc2KHjZJA5e4OQKfK6CQUY4R9p1Akp4Y+1yrhLGokWLgqWvrsDnyucsmKRUu05ACenh3IVnj3wsr303a9cJKGB7OD937py2XmPn7Nmztof1Gdr1AjEjPZzz2ICrVFdXSwaZo10vEDNU9CrXH87z4RkDgkHKtesFYsYTWvfwAiNXOXz4sGSQFu16gZgxPaAvXLgwmILhKvw2S1iii1F1l5Ae0Ll7oeusX78eo+quIz2gNzY2autTHc6BYBCMqrsCHtBlLKPqVdp1AzFBxW4yiWD//v3a+lSnu7tbMkiDdt1ATFCxO0wiOH78uLY+1eEcCAbp0K4biAkqdrdJBFle+xEVfs0tGKRTu24gJryxFjdXiaC/v19bn+rwh4RgkG7tuoGYwBVEBgYBbBCMogvgGQTgId0CppsANsgfTCJ49913tfWpDnerFwxSr103EBMYKJTBjF7ABsFUE4GGhgbJIFgT4goeJiuKrFu3TjIIVhW6hGeY7s57+7nQ6keCz11oJId16a7Bb2VMn5T8FsdV8AYL/B0q+iaTGN544w1tnarB5y4YZJN2vUDMUNEfMolhyZIl2jpVo6qqSjLIQ9r1AjFDRb+G4igGDMew3F5xjq7RrhdQwBO2W3Pxde8rr7yC2yvwYaj4j5pEwY0LLl26pK3Z2OBzteynjtsrV6Hi/wPFKZMwXGo/amk7itsr1yEBrDCJg8dE0rjd80Thc+RzFQyyQrs+QBkSwY2COILNZbJOyAY6N2rXByQAEsJak0B4VJm3KcsqvDjKsgXbWu26gIRAYrhJ+hTN8vwsS5M4jpu06wIShDeGUSxZfGAP2QZ6nnY9QMIgUXya4qJJMPPmzfMPHTqkremCwefC5ySYg3PwGe16gARCwvip9KnKja1Pnz6tre0pw89UfC6Wq8fPtOsAEgwJ5EFJPIsXLw52YkorvHOWZS9Cjl9q5x8kHBLJRz2hbxZHZWVlKvtn8THzsVvMcYTiY9r5BymAhHKHRUiB0NLUQ6uvry/MHBx3aOcdpIgwkzzxxBOpmPXLx8jHGmKOn2jnG6QIb2zN+v+HiCp4E/T666/7o6Oj2j64Cj4mPjbL26rc4HO9RTvvIOGQSKZ7wt7pkkGeffbZoJ9WkrZu42PhY+JBzqjnMh68LcT12nUACYSEcR/FsajGePHFF1MxDYVfTdfX10e9knAchUnAhyBBfCeqMXhhURpf9V4xyvz586Ma5VvadQHKkAi+TPFWlo2RD7/Revnll6MapY3iS9p1AgpQ4W+n6A8TybJly/x9+/Zp67rg8DnxuUUwSR9M4hhU8O+HCaOsrCzo1ZvEN1SFgs+tvb09ONcIRrldu24gBqjQs8PEsHz58kzcTkWFb7tWrFgRxSTf164fKCJU4HvDRPDSSy/5IyMj2pqNHT5nS+Pq3JitXUdQBKiwPwm7pdqzZ4+2TtXZvXu3rcPJlbhXu56ggFBBf2AreGlpqX/w4EFtbSYGzgXnJMQkP9CuKygAVMg7bYXmjh7Hjh3T1mTi4JxYup3AJFmACniDrcA8iQ8bd8pwbiJMdLxTu85gEoybo0cqLE//5rc3wA7nKMQkPD1nuna9wQTxhP0/OHjJaRrmUSWF9957L2yZbrN2vcEEoILNsr2t4oKDicE5CxlQnKlddxABKtTdNnO4vIPUVOHchbwCvku7/sACFegfKU5LBdyxY4e2xlIPT7+xGIRz/0ltHQABKs4cqXjPP/+8trYyQ21trc0kj2rrABiwvbXircVc2u+j2HAuLdu1cQ1u0NYDyEN6a8XrHk6cOKGtqczBzSAsja9btPUAcrC9tXJhCwMtQrZOmKWtCzDN/mBeUVHhDw0NaesoswwODgY5FgyyX1sbYJr9wRxvrYoP59hyFfm5tj6ch4rQZSrOmjVrEtWKJ6twjnmBmWCQLm19OA0V4B7p0wsP5vGxf/9+21XkHm2dOIt09aiurtbWjHNwzgWD7NTWiZPYrh7d3d3aenEOzrnlKnK3tl6cg5K+xlSMVatWaWvFWfi5TzDIUm29OAUl/FpP6GmFq4ceXV1dkkG4Vtdq68YZKNmPS+MeWe5jlXQ495bFVY9r68YZPKEDe1NTk7ZGnIdrIBhks7ZunMAb27vDWASsL9eHa2B5WJ+hrZ/MQ0mei4fzZMO1EAwyR1s/mYeSXGVKPi/kAcmgtbVVMki5tn4yj/T8gdur5GC5zUJzh2IiPX9wgzOQHHh+lqULCpo7FAvp+YOXgIJkYVmWO1dbR5kFzx/pwdLcoUpbR5mFkrvDlHT0uUoeXBPBIDu0dZRZKLnv5yec9w8cHh7W1gPIg1dyCjvr/lVbR5mFkrs1P+HcXQMkE6HzyRZtHWUSb2zTzasSvmHDBm0dAAGujXCbdZu2njIHJfX3pmSja0lysczL+p22njIHJbXalOxdu3Zp6wAIbNu2TTLIMm09ZQ5Kaq0p2bwGASQTy/qQWm09ZQ5KapMp2dwwACQTyzLcBm09ZQ5PaC2K7QySi6XbSZO2njIHJbXDlGzuEQuSCddGMEiHtp4yByW125Ts3t5ebR0AAa6NYJBubT1lDhgkfcAgMYJbrPSBW6wYwVus9IGH9BjhV4OmZKMPVnLBOEiMYKAwfXR2dkoGqdHWU+agpD5lSvZbb72lrQMgYFk0tURbT5mDkvq/pmQ3NjZq6wAIcG0Eg/xWW0+Zg5L6r6Zk19TUaOsACHBtBIPcqq2nTEKJ/XN+srFgKrksWrTIZI4/aesos1ByB/ITzss6eTNJkCy4JsLVo19bR5nFQ9OG1ICmDQp4aPuTGtD2RwEPjeNSAxrHKeAJrUe5zSW2fE4W3A5WMAhajxYTD82rEw+aVytCSV5kSn5bW5u2LsA42P5AEUry/5iSjw10kgM20FGEknyzkHzcZiUAbMGWACjRfzQVAJt46oNNPBOAJ2wDzVsQYxtoPTj3vBW3YBBsAx0XlOxrvbHN6a8qxDvvvKOtE2fh3Avm4Fpdq60bp6CErzQVY82aNdo6cRbLw/lKbb04ByV9tvQwiHXq8WPposgxW1svTkKJ32sqCNaIxE91dbVkjr3aOnEWSv790qfWwYMHtTXjDJxry9XjHm2dOA0VYJ+pME899RTmZ8XA5cuXg1wL5ujS1ofzUBEekD69MA2++FimlXA8oK0P56EifITikKlAZWVl/sDAgLaGMgvnlnMsmINr8hFtfYBp8jR4DqwVKR6WNR+YVpI0PGEaPAc3MAOFxdIUDtNKkggVZTrFMVPBSktL/XPnzmlrKjOcPn06yKlgjgMUn9PWA8iBCvIVaUzkSqxduzZ44wKmxvDwsL98+XLb1YNjD26xEgAV4Z8o/hBSrL8HZvtOnYaGhki5vnKrhauJEpT4b1AcjFIo7p1VX1+P9SIFgPf82LhxY5DTiCbhW65/09aLM1Cyv0jxf1E/xerq6vyTJ09q6ypzcE5D3mLlxxsU/6Ktn0zD97UUPVGuGDBGPEzQKCcpbtLWUebg+9jx+9nQIixZsgRrQhTgnHPuIxqFN0P6rLauMgEl8mfj97HWpPOILk97wJsqPTj3XAPL6Hpu7IdJpggl8FtRPpGefvppv6+vT1sfYBze3day9UF+3KKts9RBSfsSRVtYcnmwavv27dp6AAJcG8uAYm7wBq3Xa+suFVCi7qLoC0sqD/xhdDz5nD171l+3bl0UkxyFSUKgBN0XlsgFCxYE97lY65EeuFZbt24NahfBKHdp6zCRUGIeDkveypUrg/tbkE7OnDlja+yQG/dp6zFRUEIeC0saT3EYGRnRrjGYIlzDTZs2RTHJw9q6TASUiN/YElVSUuLv3r1bu66gwLS3twe1DTHJY9r6VCXMHJWVlcHcH5BNuLbCRp+54WbD6zBz8KgsvwEB2YZrHGEE3i2T8AnbEsLdES9cuKBdOxATXGuuOUwyLTDHf9oSsWHDhmBRDnALrjnXPsQkj2rrt6hEMQfeVLnL0NBQMG0oxCSPaOu4KNCJPQhzgDCcNAmd0D0wB4hKRJM8qK3rgkAncrftRFevXh0kBIBcWBMRHtx/rK3vKeGNdRuxmuPixYvatQAJhbURwSTpnLs1bo7z0oktW7YM5gChsEZC2gyxxr6irfcJQwe9XTqpxYsX++fPn9fOPUgJrBXWjMUk27X1PiHogL8nnczChQuDznwATIRTp04F2rGY5Hvauo8EHeh/SCfB6wFOnDihnWuQUnjuVsiakl9p69+KzRwce/fu1c4xSDmsoZCH9n/X9oGIN9apwnjgW7Zs0c4tyAjcQtZikH3aPjBCB/Zz6aDXr1+PJbKgYIyOjgaaspjkfm0/fAg6oB9JB8trOt5//33tnIKMwZpibVlM8l1tXwTQgXyKYkA6UOxZDooFa8tikPcoPqHtDzbIXOkgGxsbtXMIMg5rzGKS/9I2x7elg1uxYgXWdYCiwxoLWZF4p5Y5Pk5x3HRQvBifB3YAiIOjR4/a9ivhbfmu0TDII3ilC5JCyKvfeAcQ6Q9+nuID08EsXboUHdZB7PD0eNaeYJBRiuviNMhCya1HjhzRzhVwlMOHD9uuIuVxmeMGT9jl6YUXXtDOEXAc1qDlWWR6HAZpkR7M+/v7tfMDHIc1aOnY2Fxsc8zCgzlIOqxFy63WzGIaxLipTUVFBdaVg8QwODgYaFIwSFuxzHGn5ModO3Zo5wSAD9HR0RHv4KH07FFVVYWZuiBxcBspywh7S6HNIT57dHZ2aucCACOsTctVZFYhDVJi+iM83wpXD5BUWJuWq0hJocxxPZ49QFphjVquIv9cCIMsMv3y8vJytAsFiYdn+1q6oTwxVXNc441tz4txD5BaLOMirO3Jz/SlH37I9Iu59Qoav4G0MDAw4M+fP18yyUNTMUiz6ZdipSBIG5Y5Wpsna46Z0sMNz5oEIE2EzPSdMRmDGNeacyNhANKIpQvKxPc/9IR5VzyED0AaaW1tLcz8LE+Yd8UPOtiyAKQV3k3X8rAefX4WfXOF6ZfwVmkApBnLTroVU769wrwrkHYs87Oi3WZJt1dlZWVY8wFSD2t4SrdZ0u0V1puDrFBbWzv52yz6phrcXoEsY7nNqgkzhzj3iofrAcgC3NhBMIh9bxFPmHu1atUq7XMCoKDwLsuCSeS9ReiLm0w/hJm7IGtYWpU+azNIi+mHMPcKZA3L3iJNNoPszP8B7pqNhVEga/CoutAR3jweQl+4G88fwCVY25HHQ+g/l5q+me/VAMgilt2prh4Pof+sNX1zV1eX9nkAUBQmNB5C/9lt+ube3l7t8wCgKLC2BYN0R3qDVVpair5XILOwtlnjBoO05JvD2Dmxurpa+xwAKCqsceEqMivXIMbOiWjOALKO5UG9JNcgq0zfhM6JIOtYOi+uyjVIg+mburu7tY8fgKLCGhcM0pBrkE7TN/X09GgfPwBFhTUuGKQz1yD9pm/inXoAyDKsccEg/bkGueobuDk1AC7AWjd5wGoQni8PgAtIa0OsBqmpqdE+bgBiQRoLsRoETRqAK0hNHHINshmDhMBVhMHCzVfMMcPkHiyzBa5g2WBnBhtkjumLLS0t2scNQCyw1gWDzGGDlJu+yJ2wAXABS9f3cjZIlemL2OYAuAJrXTBIFRsEExWB04QZxDjVvb6+3n/zzTcRiMxHXV2dZJC5bBDjYikEAuHNFJfbIhCOR3PuQOENFD0JOCgEIglxjGJ6/rp0NsnBBBwcAqEZ7IHrrupqMm6S6ygaE3CQCIRGsPbN5sgzylcp/tsb220Kgch6sNa/avLC3wBUj0lE7q/E/gAAAABJRU5ErkJggg=='
        />
      </defs>
      <style></style>
      <use id='Layer 3' href='#img1' x='100' y='80' />
    </svg>
  );
}

export function BlackPawn({ height, width }) {
  return (
    <svg
      version='1.2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 400 400'
      width={width || '400'}
      height={height || '400'}
    >
      <title>BlackPawn</title>
      <defs>
        <image
          width='200'
          height='239'
          id='img1'
          href='data:image/png;base64,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'
        />
      </defs>
      <style></style>
      <use id='Layer 3' href='#img1' x='100' y='80' />
    </svg>
  );
}
