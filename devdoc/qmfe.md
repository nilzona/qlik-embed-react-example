---
title: QMFE
description: Recommended setup when working with QMFE
category: Frontend
type: Recommended Setup
typeSortPriority: 3
pageSortPriority: 6
---

## frontend-tools

[frontend-tools](https://github.com/qlik-trial/frontend-kit/tree/main/packages/frontend-tools) is a cli that is streamlined
for working with qmfe UI components. It can be used to build, start, lint, format, and release your qmfe component. Using
`frontend-tools` hides away devDependencies and configuration files needed for developing a qmfe component and keeping
the configuration piece in a central place will make it easier to push changes to the qmfe architecture.

## Integration Browser Tests

To integrate your UI along with other Qlik UI's we recommend adding tests for features in your UI in the
[QMFE Test Pool](https://github.com/qlik-trial/qmfe-test-pool). Adding tests for your UI component there will secure
that no other team will break your UI. It is strongly recommended to add some integration tests of your ui to the pool.
