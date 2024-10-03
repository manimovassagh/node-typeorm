# Variables
BUILD_DIR = dist

# Default target to build the project
build:
	@echo "Building the project..."
	npm run build

# Target to run the built project
run:
	@echo "Running the built project..."
	npm run startBuild

# Target to clean the build directory
clean:
	@echo "Cleaning the build directory..."
	rm -rf $(BUILD_DIR)

# Target to build and run the project in one step
build-and-run: clean build run

.PHONY: build run clean build-and-run