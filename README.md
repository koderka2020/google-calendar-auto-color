# Google Calendar Auto-Color 

Color-coding automation for Google Calendar 🗓️ via Google Apps Script

This is a script for an **automatic color-coding system** where:

- Events **you created** get one color (say, blue 💙)
- Events **you’re invited to** keep another (say, default gray)

It applies to (and fetches) events between **today (`now`)** and **30 days ahead (`nextMonth`)** — nothing before or after that window, but feel free to customize your time limits.  

⚠️ **Note:** If your calendar has thousands of events, fetching too wide a range can slow it down or hit Google’s script execution limit (6 minutes per run).

---

## 🧩 Step 1: Open Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click **New project**
3. Rename it something like **“Calendar Auto-Color”**

---

## 🧠 Step 2: Paste this script

Delete the placeholder code and paste the script from your file into the Google Apps Script editor.

---

## 🧰 Step 3: Save the project

1. Click **File → Save** (or press `Ctrl+S` / `Cmd+S`)
2. Give your project a name — e.g., **“Calendar Auto-Color”**
3. If you don’t save it at least once, the trigger UI can hang

---

## ✅ Step 4: Run once manually

1. Click **Run ▶️** at the top to test it  
2. On the first run, Google will ask for permissions — approve them  
   (you may need to click **Advanced → Go to project**)  
3. Open your Google Calendar — your created events should turn **blue**, while invites stay **gray**

---

## 🎨 Step 5: Customize (optional)

You can change colors by editing this line in your script:
```
CalendarApp.EventColor.BLUE
```
# 🎨 Possible Options
`PINK`, `PALE_BLUE`, `MAUVE`, `PALE_GREEN`, `PALE_ORANGE`, `PALE_RED`, `YELLOW`, `CYAN`, `GRAY`, `BLUE`, `GREEN`, `RED`

After editing, **run the function manually** to apply the changes.

---

## ⚙️ Step 6: Set up a trigger (so it runs automatically)

1. Click the **clock icon 🕒** in the left sidebar (**Triggers**)
2. Click **“+ Add Trigger.”**
3. Choose:
   - **Function:** `colorMyEvents`
   - **Deployment:** `Head`
   - **Event source:** `Time-driven`
   - **Type:** e.g. *Day timer → Every 6 hours (or once daily)*
4. Click **Save**

---

# 🧍‍♀️ By default (your current setup)

- The script runs **under your Google account only**
- It can **only access your calendar(s)** — not anyone else’s
- The trigger runs as **you**, in your Google environment  
✅ So no one else can see, copy, or run it unless you share it

---

# 👥 If you share it (optional)

If you ever click **Share → Add people**, you can give others access:

- **Viewer** → they can see the code  
- **Editor** → they can edit or run it manually  

But even then, it won’t affect their calendars — only yours, unless you specifically deploy it for them (as a **“web app”** or **“add-on”**)
****

