import { View, createButton } from 'okta';

export default View.extend({
  className: 'sign-in-with-device-option',
  template: `
    <div class="okta-verify-container"></div>
    <div class="separation-line"><span>OR</span></div>
  `,
  initialize () {
    const appState = this.options.appState;
    this.add(createButton({
      className: 'button-secondary',
      title: 'Sign in using Okta Verify',
      click () {
        appState.trigger('invokeAction', 'launch-authenticator');
      }
    }), '.okta-verify-container');
  }
});