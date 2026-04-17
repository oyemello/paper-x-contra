## CUE:
Create new components

## TASK:
### headerIcon
- default: 44px square, 10px padding all around, wxh = hug, 24px square iconPlaceholder, no bgColor.
- Leading Left: 34x44px rectangle, 10px padding all around except right, wxh = hug, 24px square iconPlaceholder, no bgColor.
- Trailing Right: 34x44px rectangle, 10px padding all around except left, wxh = hug, 24px square iconPlaceholder, no bgColor.

### badge
- default: 87x44px rectangle, 10px padding top & bottom, 20px padding sideways, wxh = hug,
textStyle={typography.presets.Label.md-light},
textColor={primitive.neutral.500},
bgColor={primitive.neutral.900},
borderWeight={1px},
borderColor={semantic.border-strong},
context=inside border.

### button
- default: 124x44px rectangle, 10px padding top & bottom, 20px padding sideways, wxh = hug,
gap={10px},
textStyle={label.md-light},
textColor={semantic.text.tertiary},
bgColor={primitive.neutral.0},
cornerRadius={30px},
borderWeight={1px},
borderColor={semantic.border-default},
context=add 24px square placeholderIcon before the text, inside border.

- selected: 124x44px rectangle, 10px padding top & bottom, 20px padding sideways, wxh = hug,
gap={10px},
textStyle={label.md-light},
textColor={semantic.text.inverse},
bgColor={primitive.brand.500},
cornerRadius={30px},
context=add 24px square placeholderIcon before the text.

- defaultTrailing: 124x44px rectangle, 10px padding top & bottom, 20px padding sideways, wxh = hug,
gap={10px},
textStyle={label.md-light},
textColor={semantic.text.tertiary},
bgColor={primitive.neutral.0},
cornerRadius={30px},
borderWeight={1px},
borderColor={semantic.border-default},
context=add 24px square placeholderIcon after the text, inside border.

- selectedTrailing: 124x44px rectangle, 10px padding top & bottom, 20px padding sideways, wxh = hug,
gap={10px},
textStyle={label.md-light},
textColor={semantic.text.inverse},
bgColor={primitive.brand.500},
cornerRadius={30px},
context=add 24px square placeholderIcon after the text.

- defaultIconOnly: 44x44px square, 10px padding all around, wxh = hug,
bgColor={primitive.neutral.0},
cornerRadius={30px},
borderWeight={1px},
borderColor={semantic.border-default},
context=add 24px square placeholderIcon, inside border.

- selectedIconOnly: 44x44px square, 10px padding all around, wxh = hug,
bgColor={primitive.brand.500},
cornerRadius={30px},
context=add 24px square placeholderIcon.

- defaultTextOnly: 90x44px rectangle, 10px padding top & bottom, 20px padding sideways, wxh = hug,
textStyle={label.md-light},
textColor={semantic.text.tertiary},
cornerRadius={30px},
borderWeight={1px},
borderColor={semantic.border-default},
bgColor={primitive.neutral.0}, inside border.

- selectedTextOnly: 90x44px rectangle, 10px padding top & bottom, 20px padding sideways, wxh = hug,
textStyle={label.md-light},
textColor={semantic.text.inverse},
bgColor={primitive.brand.500},
cornerRadius={30px},
bgColor={primitive.brand.500}.

### label
- default: 114x44px rectangle, 10px padding top & bottom, 20px padding sideways, wxh = hug,
gap={10px},
textStyle={label.md-light},
textColor={semantic.text.tertiary},
bgColor={primitive.neutral.0},
cornerRadiusTop&BottomRight={10px},
cornerRadiusTop&BottomLeft={0px},
borderWeight={1px},
borderColor={semantic.brand-primary},
context=add 24px square placeholderIcon before the text, inside border.

- selected: 114x44px rectangle, 10px padding top & bottom, 20px padding sideways, wxh = hug,
gap={10px},
textStyle={label.md-light},
textColor={semantic.text.inverse},
bgColor={primitive.brand.500},
cornerRadiusTop&BottomRight={10px},
cornerRadiusTop&BottomLeft={0px},
context=add 24px square placeholderIcon before the text.