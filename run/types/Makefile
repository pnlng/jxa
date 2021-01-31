default: update
.PHONY: update

APP_FILES_FOLDER = system-apps

update:
	git submodule update JXA
	rm -rf $(APP_FILES_FOLDER)/*.d.ts
	cp JXA/packages/@jxa/types/src/core/*.d.ts $(APP_FILES_FOLDER)/