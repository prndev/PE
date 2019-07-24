SOURCES = $(shell find */ -type f | sed 's/ /\\ /g')
# ^^ thanks to https://stackoverflow.com/questions/13963563/using-makefile-wildcard-command-for-file-names-with-spaces

imagePacks.js: $(SOURCES)
	pwsh -File RebuildImagePack.ps1

# Note: This needs https://github.com/powershell/powershell.
# powershell in turn needs libgdiplus.so to run the script.
