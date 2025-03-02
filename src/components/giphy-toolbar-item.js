// eslint-disable-next-line no-unused-vars
import React from 'dom-chef'

export default (
  <details class="details-reset details-overlay toolbar-item select-menu select-menu-modal-right ghg-trigger btn-octicon">
    <summary
      class="menu-target p-2 p-md-1 mx-1"
      aria-label="Insert a GIF"
      aria-haspopup="menu"
    >
      {'GIF'}
    </summary>
    <details-menu
      class="select-menu-modal position-absolute right-0 ghg-modal"
      style={{'z-index': 99, width: '480px', 'max-height': '410px'}}
      role="menu"
    >
      <div class="select-menu-header d-flex">
        <span class="select-menu-title flex-auto">Select a GIF</span>
        <select class="ghg-provider-selector">
          <option value="tenor">Tenor</option>
          <option value="giphy">Giphy</option>
        </select>
      </div>
      <tab-list>
        <div class="select-menu-filters">
          <div class="select-menu-text-filter">
            <input
              type="text"
              class="form-control ghg-search-input"
              placeholder="Search for a GIF…"
              aria-label="Search for a GIF"
              autofocus=""
            />
          </div>
        </div>
        <div
          class="ghg-giphy-results"
          style={{
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center'
          }}
        />
      </tab-list>
    </details-menu>
  </details>
)
