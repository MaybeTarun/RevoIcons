function template(
  { template },
  opts,
  { componentName, jsx }
) {
  const typeScriptTpl = template.smart({ plugins: ["typescript"] });
  return typeScriptTpl.ast`
import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  strokeColor?: string;
  fillColor?: string;
}

const ${componentName} = ({ size = 32, strokeColor, fillColor, ...props }: IconProps) => {
  return (
    React.cloneElement(
      ${jsx},
      {
        width: size,
        height: size,
        stroke: strokeColor || '${jsx.openingElement.attributes.find(a => a.name.name === "stroke")?.value.value || "currentColor"}',
        fill: fillColor || '${jsx.openingElement.attributes.find(a => a.name.name === "fill")?.value.value || "none"}',
        ...props
      }
    )
  );
};

export default ${componentName};
  `;
}

module.exports = template;
