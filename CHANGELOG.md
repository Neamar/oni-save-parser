## 4.1.0

- Basic progress reporting (game object start only)
- Restore MinionModifiers

## 4.0.0

- Rework accessory type code to handle non-ordinal and prefix-clashing accessory names.
  -- prefix clash: "hair" vs "hair_always"
  -- non-ordinal: "hair_always_DEFAULT"

## 3.2.1

- Fix AccessoryType.

## 3.2.0

- Add missing accessory slots.
- Added map tying minion identity bodyData slots to accessories.

## 3.1.1

- Fix PrimaryElementBehavior interface name.

## 3.1.0

- Add missing templateData typings to StorageBehavior

## 3.0.1

- Export StorageBehavior.

## 3.0.0

- Include hard-coded enumeration and other constant data.
  -- SimHashes
  -- GeyserType
  -- HealthState

## 2.2.1

- Fix getBehavior not exported.

## 2.2.0

- Added support for parsing extra data of Storage behavior.
  Enables modifying the stored contents of all game objects that store items. This includes storage compactors, hydrogen and coal generators, and various other internal buffers used by buildings and creatures.
- Export TypeTemplate and related typings
- Export known GameObject types
