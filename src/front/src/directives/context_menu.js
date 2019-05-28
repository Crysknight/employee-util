import store from '../store';
import {
    MUTATION_OPEN_CONTEXT_MENU,
    MUTATION_CLOSE_CONTEXT_MENU
} from 'constants';

class ContextMenuDirective {
    constructor(element, menu) {
        this.handleContextmenu = this.handleContextmenu.bind(this);
        this.handleDocumentclick = this.handleDocumentclick.bind(this);

        this.element = element;
        this.menu = menu;
        this.leftClick = menu.leftClick;
        if (!this.menu.position) {
            this.menu.position = 'bottom right';
        }
    }

    init() {
        if (this.leftClick) {
            this.element.addEventListener('click', this.handleContextmenu);
        } else {
            this.element.addEventListener('contextmenu', this.handleContextmenu);
        }
    }

    destroy() {
        if (this.leftClick) {
            this.element.removeEventListener('click', this.handleContextmenu);
        } else {
            this.element.removeEventListener('contextmenu', this.handleContextmenu);
        }
        document.removeEventListener('click', this.handleDocumentclick);
    }

    handleContextmenu(event) {
        if (this.leftClick) {
            event.stopPropagation();
        } else {
            event.preventDefault();
        }

        const { clientX, clientY } = event;
        const menu = {
            ...this.menu,
            coordinates: {
                x: clientX,
                y: clientY
            }
        };

        store.commit(`interface/${MUTATION_OPEN_CONTEXT_MENU}`, menu);
        document.addEventListener('click', this.handleDocumentclick);
    }

    handleDocumentclick() {
        store.commit(`interface/${MUTATION_CLOSE_CONTEXT_MENU}`);
        document.removeEventListener('click', this.handleDocumentclick);
    }
}

class ContextMenuDirectiveFactory {
    constructor() {
        this.directives = [];
    }

    addDirective(element, menu) {
        const directive = new ContextMenuDirective(element, menu);

        directive.init();

        this.directives.push(directive);
    }

    removeDirective(element) {
        const directive = this.directives.find(directive => directive.element === element);
        directive.destroy();

        const directiveIndex = this.directives.indexOf(directive);
        this.directives.splice(directiveIndex, 1);
    }

    get hooks() {
        const factory = this;

        return {
            bind(element, { value: menu }) {
                factory.addDirective(element, menu);
            },
            unbind(element) {
                factory.removeDirective(element);
            }
        };
    }
}

export default new ContextMenuDirectiveFactory().hooks;
