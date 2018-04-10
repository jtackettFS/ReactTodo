var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'cat'
			};
			var res = reducers.searchTextReducer(df(''), df(action));
			
			expect(res).toEqual(action.searchText);
		});
	});
	
	describe('showCompletedReducer', () => {
		it('should toggle show completed', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};
			var res = reducers.showCompletedReducer(df(true), df(action));
			
			expect(res).toEqual(false);
		});
	});
	
	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				todo: {
					id: 'abc123',
					text: 'a sample todo',
					completed: false,
					createdAt: 120482
				}
			};
			var res = reducers.todosReducer(df([]), df(action));
			
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);
		});
		
		it('should add existing todos', () => {
			var todos = [{
				id: 111,
				text: 'Any text',
				completed: false,
				completedAt: undefined,
				createdAt: 3938
			}];
			var action = {
				type: 'ADD_TODOS',
				todos
			};
			var res = reducers.todosReducer(df([]), df(action));
			
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);
		});
		
		it('should toggle a todo', () => {
			var todos = [{
				id: '12',
				text: 'Some text',
				completed: true,
				createdAt: 123,
				completedAt: 125
			}];
			var action = {
				type: 'TOGGLE_TODO',
				id: '12'
			};
			var res = reducers.todosReducer(df(todos), df(action));
			
			expect(res[0].completed).toEqual(false);
			expect(res[0].completedAt).toBe(undefined);
		});
	});
});