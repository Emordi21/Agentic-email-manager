# Google Cloud setup (for Milestone 2)

You only need this once, before connecting Gmail. Google's screens change names occasionally;
if a label differs slightly, look for the closest match. The project stays in **Testing** mode
with you as the only test user, so no Google verification is needed.

## 1. Create a project
1. Go to <https://console.cloud.google.com/> and sign in with your Gmail account.
2. Click the project picker (top bar) > **New Project**. Name it `InboxPilot` > **Create**.
3. Make sure `InboxPilot` is the selected project.

## 2. Enable the Gmail API
1. Menu > **APIs & Services** > **Library**.
2. Search **Gmail API** > open it > **Enable**.

## 3. Configure the consent screen
1. Menu > **APIs & Services** > **OAuth consent screen** (may appear as **Google Auth Platform**).
2. User type: **External** > **Create**.
3. App name `InboxPilot`; support email and developer contact: your address. Save.
4. **Scopes**: add `https://www.googleapis.com/auth/gmail.readonly` for now. (The modify scope is requested later, only when you first approve an action. Never add a send scope.)
5. Leave **Publishing status** as **Testing**. Do not click "Publish app".

## 4. Add yourself as a test user
1. On the consent screen page, find **Test users** > **Add users**.
2. Enter your own Gmail address > **Save**.

## 5. Create OAuth credentials
1. **APIs & Services** > **Credentials** > **Create credentials** > **OAuth client ID**.
2. Application type: **Web application**. Name: `InboxPilot web`.
3. **Authorized redirect URI**: your Supabase auth callback, `https://<your-project-ref>.supabase.co/auth/v1/callback` (we'll confirm the exact value in Milestone 2).
4. Create, then copy the **Client ID** and **Client secret**.
5. Store them as Supabase secrets (never in Git or the frontend):
   ```bash
   supabase secrets set GOOGLE_CLIENT_ID=... GOOGLE_CLIENT_SECRET=...
   ```

## Good to know: the 7-day expiry
In Testing mode, Google expires refresh tokens after about **7 days**. When that happens,
InboxPilot shows a "Reconnect Gmail" button. Click it and sign in again. This is normal.
You'll also see an "unverified app" warning when signing in; since it's your own app, choose **Advanced** > **Continue**.
