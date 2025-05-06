function animationCount(newPrice: number, price: number, setTotalPrice: (arg:number) => void) {
  let start = price;
  const end = newPrice;
  const duration = 200;
  const stepTime = 10;
  const steps = Math.ceil(duration / stepTime);
  let step = 0;
  const interval = setInterval(() => {
    step++;
    const progress = step / steps;
    const newTotalPrice = Math.round(start + (end - start) * progress);
    setTotalPrice(newTotalPrice);
    if (step >= steps) clearInterval(interval);
  }, stepTime);
}
export default animationCount