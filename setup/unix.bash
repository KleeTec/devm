#!/bin/bash
INSTALL_DIR=${INSTALL_DIR:-"."}
DENO_BIN="$INSTALL_DIR/bin/deno"
if [ ! -e $DENO_BIN ]; then
	curl -fsSL https://deno.land/x/install/install.sh | DENO_INSTALL=$INSTALL_DIR sh
fi
touch $INSTALL_DIR/devm
chmod +x $INSTALL_DIR/devm
printf "#!/bin/bash\ndeno run -A $INSTALL_DIR/devm.ts \"\$@\"" > $INSTALL_DIR/devm
