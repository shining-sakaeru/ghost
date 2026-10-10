from openhands.sdk import LLM

# Test gpt-5.6-luna subscription login
print("Starting ChatGPT subscription login with gpt-5.6-luna...")
llm = LLM.subscription_login(
    vendor="openai",
    model="gpt-5.6-luna",
    open_browser=True
)

print(f"Login successful. Using subscription: {llm.is_subscription}")
print("LLM initialized successfully with gpt-5.6-luna.")
