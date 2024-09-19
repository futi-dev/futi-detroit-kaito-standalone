import React, { useEffect, useRef } from 'react';

import { BasicsProps } from '@/app/components/ui/types';

type IRibbonBackgroundProps = BasicsProps;

export const RibbonBackground: React.FC<IRibbonBackgroundProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const { width, height } = canvas.getBoundingClientRect();
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const dpi = window.devicePixelRatio || 1;
        canvas.width = width * dpi;
        canvas.height = height * dpi;

        ctx.scale(dpi, dpi);
        ctx.globalAlpha = 0.6;
        ctx.clearRect(0, 0, width, height);

        const ribbonWidth = 90;
        let x1 = 0;
        let y1 = height * 0.7 + ribbonWidth;
        let x2 = 0;
        let y2 = height * 0.7 - ribbonWidth;

        // 初始化色调、饱和度和亮度
        let hue = 209; // 初始色调（根据#4388ca转换）
        const saturation = 56; // 饱和度百分比
        const lightness = 53; // 亮度百分比

        while (x2 < width + ribbonWidth) {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);

          const nextX = x2 + (Math.random() * 2 - 0.25) * ribbonWidth;
          let nextY;
          do {
            nextY = y2 + (Math.random() * 2 - 1.1) * ribbonWidth;
          } while (nextY > height || nextY < 0);

          ctx.lineTo(nextX, nextY);
          ctx.closePath();

          // 设置填充样式为渐变颜色
          ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
          ctx.fill();

          x1 = x2;
          y1 = y2;
          x2 = nextX;
          y2 = nextY;

          // 调整色调，形成渐变效果
          hue -= 0.5;
          if (hue < 180) hue = 210; // 如果需要，可以循环色调
        }
      }
    }
  }, []);

  return <canvas ref={canvasRef} className="absolute left-0 top-0 z-[-1] size-full" />;
};
