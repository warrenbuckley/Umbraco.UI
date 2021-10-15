import { html } from 'lit-html';
import '@umbraco-ui/uui-menu-item/lib/index';
import { UUIMenuItemElement } from '@umbraco-ui/uui-menu-item/lib/uui-menu-item.element';
import { UUIMenuItemEvent } from '@umbraco-ui/uui-menu-item/lib/UUIMenuItemEvent';

export default {
  title: 'Buttons/Menu Item',
  component: 'uui-menu-item',
};

function handleSelectItem(e: UUIMenuItemEvent) {
  e.target.selected = !e.target.selected;
}

const labelNames = [
  'Content',
  'Media',
  'Data Types',
  'Macros',
  'Relation Types',
  'Content Templates',
  'Partial Views',
];

const renderItems: any = (count = 5, iteration = 5) => {
  const elements: any = [];

  iteration = iteration - 1 - Math.floor(Math.random() * 4);

  for (let i = 0; i < count; i++) {
    let localIteration = iteration;
    localIteration = localIteration - 1 - Math.floor(Math.random() * 2);
    const index = Math.floor(Math.random() * labelNames.length);
    const element = html`<uui-menu-item
      label="${labelNames[index]}"
      @click-label="${handleSelectItem}"
      ?has-children=${localIteration > 0}
      >${localIteration > 0
        ? renderItems(count, localIteration)
        : ''}</uui-menu-item
    >`;

    elements.push(element);
  }

  return elements;
};

export const Overview = () =>
  html`${labelNames.map(
    (name: string) =>
      html`<uui-menu-item
        @click-label="${handleSelectItem}"
        label="${name}"
        has-children
        >${renderItems()}</uui-menu-item
      >`
  )}`;

// export const WithChildren = () =>
//   html` <uui-menu-item
//       label="This is list item"
//       has-children
//       @click-label=${handleClickLabel}>
//       <uui-action-bar slot="actions">
//         <uui-button label="Open actions menu">
//           <uui-more-symbol></uui-more-symbol>
//         </uui-button>
//       </uui-action-bar>
//       <uui-menu-item label="Child list item 1" @click-label=${handleClickLabel}>
//         <uui-action-bar slot="actions">
//           <uui-button label="Open actions menu">
//             <uui-more-symbol></uui-more-symbol>
//           </uui-button>
//         </uui-action-bar>
//       </uui-menu-item>
//       <uui-menu-item label="Child list item 2" @click-label=${handleClickLabel}>
//         <uui-action-bar slot="actions">
//           <uui-button label="Open actions menu">
//             <uui-more-symbol></uui-more-symbol>
//           </uui-button>
//         </uui-action-bar>
//       </uui-menu-item>
//       <uui-menu-item label="Child list item" @click-label=${handleClickLabel}>
//         <uui-action-bar slot="actions">
//           <uui-button label="Open actions menu">
//             <uui-more-symbol></uui-more-symbol>
//           </uui-button>
//         </uui-action-bar>
//       </uui-menu-item>
//     </uui-menu-item>
//     <uui-menu-item
//       label="Has children"
//       has-children
//       show-children
//       @click-label=${handleClickLabel}>
//       <uui-action-bar slot="actions">
//         <uui-button label="Open actions menu">
//           <uui-more-symbol></uui-more-symbol>
//         </uui-button>
//       </uui-action-bar>
//       <uui-menu-item
//         label="Child list item"
//         has-children
//         show-children
//         @click-label=${handleClickLabel}>
//         <uui-action-bar slot="actions">
//           <uui-button label="Open actions menu">
//             <uui-more-symbol></uui-more-symbol>
//           </uui-button>
//         </uui-action-bar>

//         <uui-menu-item label="Child list item" @click-label=${handleClickLabel}>
//           <uui-action-bar slot="actions">
//             <uui-button label="Open actions menu">
//               <uui-more-symbol></uui-more-symbol>
//             </uui-button>
//           </uui-action-bar>
//         </uui-menu-item>
//         <uui-menu-item label="Child list item" @click-label=${handleClickLabel}>
//           <uui-action-bar slot="actions">
//             <uui-button label="Open actions menu">
//               <uui-more-symbol></uui-more-symbol>
//             </uui-button>
//           </uui-action-bar>
//         </uui-menu-item>
//         <uui-menu-item label="Child list item" @click-label=${handleClickLabel}>
//           <uui-action-bar slot="actions">
//             <uui-button label="Open actions menu">
//               <uui-more-symbol></uui-more-symbol>
//             </uui-button>
//           </uui-action-bar>
//         </uui-menu-item>
//       </uui-menu-item>
//       <uui-menu-item label="Child list item" @click-label=${handleClickLabel}>
//         <uui-action-bar slot="actions">
//           <uui-button label="Open actions menu">
//             <uui-more-symbol></uui-more-symbol>
//           </uui-button>
//         </uui-action-bar>
//       </uui-menu-item>
//       <uui-menu-item label="Child list item" @click-label=${handleClickLabel}>
//         <uui-action-bar slot="actions">
//           <uui-button label="Open actions menu">
//             <uui-more-symbol></uui-more-symbol>
//           </uui-button>
//         </uui-action-bar>
//       </uui-menu-item>
//     </uui-menu-item>`;

// export const Selectable = () =>
//   html`
//     <uui-menu-item
//       @click-label=${(e: Event) => {
//         (e.target as UUIMenuItemElement).selected = !(
//           e.target as UUIMenuItemElement
//         ).selected;
//       }}
//       label="This is selectable list item"></uui-menu-item>
//     <uui-menu-item
//       @click-label=${(e: Event) => {
//         (e.target as UUIMenuItemElement).selected = !(
//           e.target as UUIMenuItemElement
//         ).selected;
//       }}
//       label="This is selectable list item"
//       selected></uui-menu-item>
//   `;

// export const Active = () =>
//   html`
//     <uui-menu-item
//       @click-label=${(e: Event) => {
//         (e.target as UUIMenuItemElement).active = !(
//           e.target as UUIMenuItemElement
//         ).active;
//       }}
//       label="This is activatable list item"></uui-menu-item>
//     <uui-menu-item
//       @click-label=${(e: Event) => {
//         (e.target as UUIMenuItemElement).active = !(
//           e.target as UUIMenuItemElement
//         ).active;
//       }}
//       label="This is activatable list item"
//       active></uui-menu-item>
//   `;
// export const WithActions = () =>
//   html`
//     <uui-menu-item
//       @click-label=${(e: Event) => {
//         (e.target as UUIMenuItemElement).active = !(
//           e.target as UUIMenuItemElement
//         ).active;
//       }}
//       label="This is activatable list item">
//       <uui-action-bar slot="actions">
//         <uui-button label="Open actions menu">•••</uui-button>
//       </uui-action-bar>
//     </uui-menu-item>
//   `;
