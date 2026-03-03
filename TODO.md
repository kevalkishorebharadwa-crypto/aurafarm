# Task: Aura Farm OTT Implementation

## Plan
- [x] Setup Base UI and Contexts
- [x] Database API and Types
- [x] Core Components
- [x] User Pages
- [x] Admin Features
- [ ] Refactor Authentication for Public Content
  - [ ] Update `RouteGuard.tsx` to allow all content routes without login
  - [ ] Simplify `Login.tsx` to remove signup option and focus on Admin credentials
  - [ ] Update `Navbar.tsx` to handle "JON" button redirecting to Admin Panel if logged in
- [x] Final Polish


## Notes
- Using Supabase for all storage.
- First user registered will be admin.
- Ads are mandatory 60s before any video playback.
